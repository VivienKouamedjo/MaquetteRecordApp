import React, { useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonButton, IonIcon, IonText, IonMenuButton } from '@ionic/react';
import { discOutline, ellipsisHorizontalOutline, headsetOutline } from 'ionicons/icons';
import './Recording.css';

const Recording: React.FC = () => {

    const [RecordRunning, SetRecordRunning] = useState(false);


    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Enregistrement vocal</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div className="loadingPositionner">
                {/* Hidden before the recording */}
                <IonIcon icon={RecordRunning? ellipsisHorizontalOutline: ""} size="large" className="loadingIcon"></IonIcon>
                <p className="actionDescription">{RecordRunning ? "Enregistrement en cours": ""}</p>
            </div>
                {/*IconRecord should be StopOutline while recording is running */}
                <IonIcon icon={discOutline} color="dark" className="iconRecord"></IonIcon>
            

                <IonButton fill="clear" onClick={() => SetRecordRunning(true) } className="buttonPositioner">
                {/* Lancer should be replaced by Arreter while recording is running */}
                    <IonText color="dark">{!RecordRunning ? "Lancer" : "Arrêter"}</IonText>
                </IonButton>

            <div className="listEnregistrementPositioner">
                <IonButton routerLink="/listrecord" className="boutonListe" hidden color="tertiary">
                    <IonIcon slot="start" icon={headsetOutline}></IonIcon>
                    Ecouter mes enregistrements
                </IonButton>
            </div>
           
               
            </IonContent>
        </IonPage>
       
    );


};

export default Recording;