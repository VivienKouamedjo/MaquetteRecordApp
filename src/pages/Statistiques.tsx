import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React from "react";
import './Listrecord.css';

const Statistiques: React.FC = () => {



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
            
            </IonContent>
        </IonPage>
       
    );


};

export default Statistiques;