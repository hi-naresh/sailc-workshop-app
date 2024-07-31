import React from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { saveAs } from 'file-saver';

const ExportFeedback = () => {
    const db = getFirestore();

    const handleExport = async () => {
        const feedbackCollection = collection(db, 'feedbacks');
        const feedbackSnapshot = await getDocs(feedbackCollection);
        const feedbackList = feedbackSnapshot.docs.map(doc => doc.data());

        const csvData = feedbackList.map(feedback => ({
            fullName: feedback.fullName,
            score: feedback.score,
            message: feedback.message,
            userId: feedback.userId,
            email: feedback.email,
            createdAt: feedback.createdAt.toDate().toISOString()
        }));

        const csvContent = 'data:text/csv;charset=utf-8,' +
            Object.keys(csvData[0]).join(',') + '\n' +
            csvData.map(e => Object.values(e).join(',')).join('\n');

        const encodedUri = encodeURI(csvContent);
        saveAs(encodedUri, 'feedbacks.csv');
    };

    return (
        <div className="text-center my-4">
            <button
                onClick={handleExport}
                className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg"
            >
                Export Feedback to CSV
            </button>
        </div>
    );
};

export default ExportFeedback;
