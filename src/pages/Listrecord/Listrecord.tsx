import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonIcon, IonText, IonButtons, IonMenuButton, IonListHeader, IonRow, IonCol } from "@ionic/react";
import React, { useContext, useState } from "react";
import './Listrecord.css';
import { playOutline, shareSocialOutline } from "ionicons/icons";

const Listrecord: React.FC<{tab: Array<String>}>= props => {

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
            {/*
              <IonList>
                <IonListHeader>
                    <IonRow>
                        <IonCol>Enregistrements</IonCol>
                        <IonCol className="textDuree">Durée</IonCol>
                    </IonRow>
                </IonListHeader>
            
              {props.tab.map((record,_index) => {
                return(
                <IonItem>
                    <IonLabel>{record}</IonLabel>
                </IonItem>
                );
              }
              ) 
              }
              </IonList>
            */}
            </IonContent>
        </IonPage>
       
    );


};

export default Listrecord;