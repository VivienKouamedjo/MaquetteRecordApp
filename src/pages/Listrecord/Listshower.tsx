import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonButtons, IonMenuButton } from "@ionic/react";
import React from "react";
import './Listrecord.css';
import Listrecord from "./Listrecord";
const ListShower: React.FC<{tab_records : Array<[]>}> = props => {


    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                        <IonMenuButton />
                </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Liste des enregistrements</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              {/*<IonButton routerLink="/statistiques">stats</IonButton>  
                    <Listrecord></Listrecord>
    */}
            </IonContent>
        </IonPage>
       
    );


};

export default ListShower;