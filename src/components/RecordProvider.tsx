import { createContext, useState } from "react";
import React from 'react';
import recordType from "../model/recordType";
import Listrecord from "../pages/Listrecord/Listrecord";

export const RecordContext = createContext<recordType[]>(
    [
        {
            name: 'Enregistement 1',
            filepath: 'fdff',
            duration: '00:26:52',
            id: 1
        }
    ]
   
);

export const RecordProvider: React.FC = (props) => {

    {/* JUST CREATE FAKE RECORD FOR THE PRINTING ON SCREEN*/}
    const Records : Array<recordType> = [
        {
            name: 'Enregistement 1',
            filepath: 'fdff',
            duration: '00:26:52',
            id: 1
        }
    ]
        
    return(
        <RecordContext.Provider value={Records}>   {/*[Records, setRecords ] */}
            <Listrecord/>
        </RecordContext.Provider>
    );
}
