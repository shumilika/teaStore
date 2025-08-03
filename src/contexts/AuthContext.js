import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/fireBaseConfig'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

       const createUserDoc = async (user) => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          createdAt: new Date(),
        }, { merge: true });
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async(user) => {
       if (user) {
        await createUserDoc(user);  // <-- добавляем создание документа при входе
        setCurrentUser(user);
        // setLoading(false)
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

//   if (loading) {
//   return <div>Загрузка...</div>; // или спиннер
// }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
