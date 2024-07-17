// import React from 'react';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { saveAs } from 'file-saver';
//
// const ExportData = () => {
//     const exportData = async () => {
//         const db = getFirestore();
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const data = querySnapshot.docs.map(doc => doc.data());
//         const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//         saveAs(blob, 'workshop_data.json');
//     };
//
//     return (
//         <button onClick={exportData} className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded">
//             Export Data
//         </button>
//     );
// };
//
// export default ExportData;
