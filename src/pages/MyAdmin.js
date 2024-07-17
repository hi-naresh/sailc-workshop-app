import React, { useEffect, useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Admin = () => {
    const [workshops, setWorkshops] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const { getWorkshops, getUsers, getUserWorkshops } = useFirebase();
    const auth = getAuth();

    useEffect(() => {
        let isMounted = true; // Prevent state updates if component is unmounted

        const fetchWorkshops = async () => {
            try {
                const workshopsList = await getWorkshops();
                const usersList = await getUsers();

                console.log('Fetched Workshops:', workshopsList);
                console.log('Fetched Users:', usersList);

                if (isMounted) {
                    const groupedData = workshopsList.map(workshop => {
                        const registeredUsers = usersList.filter(user => user.workshopId === workshop.id);
                        return {
                            ...workshop,
                            users: registeredUsers
                        };
                    });

                    console.log('Grouped Data:', groupedData);
                    setWorkshops(groupedData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const checkAdminStatus = async (user) => {
            if (user) {
                const userDoc = await getUserWorkshops(user.uid);
                console.log('User Document:', userDoc);
                if (userDoc && userDoc.isAdmin) {
                    setIsAdmin(true);
                    fetchWorkshops();
                } else {
                    setIsAdmin(false);
                }
            } else {
                setIsAdmin(false);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, checkAdminStatus);

        return () => {
            isMounted = false; // Cleanup function to avoid memory leaks
            unsubscribe(); // Unsubscribe from onAuthStateChanged
        };
    }, [auth, getUserWorkshops, getWorkshops, getUsers]);

    return (
        <div className="admin-page py-20">
            <h2 className="text-3xl text-center mb-10">Admin Page</h2>
            {isAdmin ? (
                <div className="max-w-4xl mx-auto text-center">
                    {workshops.length > 0 ? (
                        workshops.map((workshop, index) => (
                            <div key={index} className="mb-10">
                                <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                                <table className="min-w-full bg-white">
                                    <thead>
                                    <tr>
                                        <th className="py-2">Sr No.</th>
                                        <th className="py-2">Full Name</th>
                                        <th className="py-2">School</th>
                                        <th className="py-2">Email</th>
                                        <th className="py-2">Registration ID</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {workshop.users.map((user, userIndex) => (
                                        <tr key={user.id}>
                                            <td className="py-2">{userIndex + 1}</td>
                                            <td className="py-2">{user.name}</td>
                                            <td className="py-2">{user.school}</td>
                                            <td className="py-2">{user.email}</td>
                                            <td className="py-2">{user.registrationId}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ))
                    ) : (
                        <p>No workshops found.</p>
                    )}
                </div>
            ) : (
                <p className="text-center text-red-500">You do not have permission to view this page.</p>
            )}
        </div>
    );
};

export default Admin;
