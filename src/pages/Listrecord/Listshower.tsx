import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem } from "@ionic/react";
import React, { useContext } from "react";
import './Listrecord.css';
import {RecordProvider} from '../../components/RecordProvider';
import Listrecord from "./Listrecord";
import Record from "../../components/Record";
const ListShower: React.FC = () => {


    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <p className="centeredTitle">Liste des enregistrements</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              {/*<IonButton routerLink="/statistiques">stats</IonButton> */}  
                <RecordProvider>
                    <Listrecord></Listrecord>
                </RecordProvider>
            </IonContent>
        </IonPage>
       
    );


};

export default ListShower;