import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
 apiKey: "AIzaSyAHt5DG7KWkL5Jfxl3ZP0ComTpk-UnfxoY",
 authDomain: "inventory-management-app-2024.firebaseapp.com",
 projectId: "inventory-management-app-2024",
 storageBucket: "inventory-management-app-2024.appspot.com",
 messagingSenderId: "627581432903",
 appId: "1:627581432903:web:f623c2f2b751b4e500ad62"
 };
 const app = initializeApp(firebaseConfig);
 const firestore = getFirestore(app);
 const auth = getAuth(app);
 
 export { app, firestore, auth };
 