import { createContext, useState } from "react";
import React from 'react';
import recordType from "../model/recordType";
import User from "../model/User";
import Profil from "../pages/Profil/profil";

export const UserContext = createContext(
   {
    id: 1,
        tranche_d_age: '25-30 ans',
        genre : 'Homme',
        age: 25,
        pays: 'France',
        ville: 'Le Mans',
        email: 'jdan@gmail.com',
        password: '8888999'
   }
);

export const RecordProvider: React.FC = (props) => {

    {/* JUST CREATE FAKE RECORD FOR THE PRINTING ON SCREEN*/}
    const User : User = {
        id: 1,
        tranche_d_age: '25-30 ans',
        genre : 'Homme',
        age: 25,
        pays: 'France',
        ville: 'Le Mans',
        email: 'jdan@gmail.com',
        password: '8888999'
    };
        
    return(
        <UserContext.Provider value={User}>   {/*[Records, setRecords ] */}
            <Profil></Profil>
        </UserContext.Provider>
    );
}
