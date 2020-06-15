import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonIcon, IonText, IonButtons, IonMenuButton, IonListHeader, IonRow, IonCol } from "@ionic/react";
import React, { useContext } from "react";
import './Listrecord.css';
import {RecordContext} from '../../components/RecordProvider';
import { playOutline, shareSocialOutline } from "ionicons/icons";
const Listrecord: React.FC = () => {

    const value = useContext(RecordContext);
    console.log(value);
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
              <IonList>
                <IonListHeader>
                    <IonRow>
                        <IonCol>Enregistrements</IonCol>
                        <IonCol className="textDuree">Durée</IonCol>
                    </IonRow>
                </IonListHeader>
              {value.map((record,_index) => {
                return(
                <IonItem key={record.id}>
                    <IonLabel>{record.name}</IonLabel>
                    <IonIcon icon={playOutline}></IonIcon>
                    <IonButton fill="clear"><IonIcon icon={shareSocialOutline} slot="icon-only"></IonIcon></IonButton>
                    <IonText>{record.duration}</IonText>
                </IonItem>
                );
              }
              ) 
              }
              </IonList>
            </IonContent>
        </IonPage>
       
    );


};

export default Listrecord;