import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText } from "@ionic/react";
import React from "react";



const InscriptionEnd : React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><p className="centeredTitle">Avant de nous quitter</p></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonText>Bonjour</IonText>
            </IonContent>   
        </IonPage>
        
    );
};

export default InscriptionEnd;