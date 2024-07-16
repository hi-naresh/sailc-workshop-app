import React, { useEffect, useState } from 'react';
import { getUserWorkshops } from '../firebase';
import { getAuth } from 'firebase/auth';

const MyWorkshops = () => {
    const [workshop, setWorkshop] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const fetchWorkshop = async () => {
            const userId = auth.currentUser.uid;
            const workshopId = await getUserWorkshops(userId);
            setWorkshop(workshopId);
        };

        fetchWorkshop();
    }, [auth]);

    return (
        <div className="my-workshops py-20">
            <h2 className="text-3xl text-center mb-10">My Workshops</h2>
            <div className="max-w-4xl mx-auto text-center">
                {workshop ? (
                    <p>You are registered for the workshop: {workshop}</p>
                ) : (
                    <p>You are not registered for any workshop.</p>
                )}
            </div>
        </div>
    );
};

export default MyWorkshops;
