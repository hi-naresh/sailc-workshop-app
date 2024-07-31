import React, { useEffect, useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ExportFeedback from "../components/Export";

const Admin = () => {
    const auth = getAuth();

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
