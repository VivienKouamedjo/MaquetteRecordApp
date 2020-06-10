import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonButton, IonIcon, IonText, IonMenuButton } from '@ionic/react';
import { discOutline, ellipsisHorizontalOutline, headsetOutline } from 'ionicons/icons';
import { MenuExample } from '../../components/Menu';
import './Recording.css';

const Recording: React.FC = () => {

    const startRecording = () =>{};
    let nbreClick = 0;  //JUST TO REPLACE ONSTART AND ONSTOP FUNCTIONS


    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
                    <MenuExample/>
                </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Enregistrement vocal</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div className="loadingPositionner">
                {/* Hidden before the recording */}
                <IonIcon icon={ellipsisHorizontalOutline} size="large" className="loadingIcon"></IonIcon>
                <p className="actionDescription">Enregistrement en cours</p>
            </div>
                {/*IconRecord should be StopOutline while recording is running */}
                <IonIcon icon={discOutline} color="dark" className="iconRecord"></IonIcon>
            

                <IonButton fill="clear" onClick={startRecording} className="buttonPositioner">
                {/* Lancer should be replaced by Arreter while recording is running */}
                    <IonText color="dark">Lancer</IonText>
                </IonButton>

            <div className="listEnregistrementPositioner">
                <IonButton routerLink="/listrecord" className="boutonListe" color="tertiary">
                    <IonIcon slot="start" icon={headsetOutline}></IonIcon>
                    Ecouter mes enregistrements
                </IonButton>
            </div>
           
               
            </IonContent>
        </IonPage>
       
    );


};

export default Recording;