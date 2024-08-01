import React from 'react';
import ExportFeedback from "../components/Export";

const Admin = () => {
    return (
        <div className="admin-page py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center">Admin Page</h1>
                <p className="text-center text-lg mt-4">This page is only for admin users</p>
                <ExportFeedback />
            </div>
        </div>
    );
};

export default Admin;
