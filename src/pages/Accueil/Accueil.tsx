import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import './Accueil.css';
import { createOutline } from 'ionicons/icons';

const Accueil: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p className="centeredTitle">Accueil</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
            <div className="ContentImage">

            </div>
            <div className="descriptionAccueil">
            Jouez et aidez les chercheurs à 
            améliorer la reconnaissance 
            des émotions. C’est parti pour une 
            toute nouvelle expérience !
            </div>
            <IonButton color="tertiary" routerLink="/recording" className="buttonToRecording"><IonIcon icon={createOutline} slot="icon-only" size="large" color="dark"></IonIcon></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
