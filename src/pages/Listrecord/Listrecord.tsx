import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel, IonIcon, IonText } from "@ionic/react";
import React, { useContext } from "react";
import './Listrecord.css';
import {RecordProvider, RecordContext} from '../../components/RecordProvider';
import Record from '../../components/Record';
import recordType from "../../model/recordType";
import { playOutline, shareSocialOutline } from "ionicons/icons";
const Listrecord: React.FC = () => {

    const value = useContext(RecordContext);

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
              {value.map(record =>(
                <IonItem key={record.id}>
                <IonLabel>{record.name}</IonLabel>
                <IonIcon icon={playOutline}></IonIcon>
                <IonIcon icon={shareSocialOutline}></IonIcon>
                <IonText>{record.duration}</IonText>
            </IonItem>
              )
              )}  
            </IonContent>
        </IonPage>
       
    );


};

export default Listrecord;