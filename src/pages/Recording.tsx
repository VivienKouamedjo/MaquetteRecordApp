import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonButton, IonIcon, IonText } from '@ionic/react';
import { discOutline, ellipsisHorizontalOutline, headsetOutline } from 'ionicons/icons';
import { MenuExample } from '../components/Menu';
import './Recording.css';

const Recording: React.FC = () => {

    const startRecording = () =>{};


    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <MenuExample/>
                </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Enregistrement vocal</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div className="loadingPositionner">
                <IonIcon icon={ellipsisHorizontalOutline} size="large"></IonIcon>
                <p>Enregistrement en cours</p>
            </div>

            <div className="IoonPositioner">
                <IonIcon icon={discOutline} color="dark" size="large" mode="md"></IonIcon>
            </div>

            <div className="buttonPositioner">
                <IonButton fill="clear" onClick={startRecording}>
                    <IonText color="dark">Lancer</IonText>
                </IonButton>
            </div>

            <div className="listEnregistrementPositioner">
                <IonButton routerLink="/listrecord">
                    <IonIcon icon={headsetOutline}></IonIcon>
                </IonButton>
            </div>
           
               
            </IonContent>
        </IonPage>
       
    );


};

export default Recording;