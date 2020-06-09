import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonItem, IonRow, IonInput, IonCol, IonLabel, IonIcon, IonRouterLink } from '@ionic/react';
import React, { useRef, FormEvent } from 'react';
import './Home.css';
import { Link, Route, Router } from 'react-router-dom';
import { login } from '../services/authService';

const Home: React.FC = () => {

  const mailInputRef = useRef<HTMLIonInputElement>(null);
  const passInputRef = useRef<HTMLIonInputElement>(null);

  const getMail = () =>{
    return mailInputRef.current!.value;
  }

  const getpass = () =>{
    return mailInputRef.current!.value;
  }

  
  const submitForm = (e: FormEvent) =>{
    e.preventDefault();
    const user = { 
      email: getMail,
      password: getpass
    }
    
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Connexion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div className="form">
      <form onSubmit={submitForm}>
      <IonGrid>
      <IonItem>
        <IonRow>
          <IonCol><IonLabel>Mail</IonLabel></IonCol>
        </IonRow>
        <IonRow>
          <IonInput ref={mailInputRef} placeholder="exemple@gmail.com" type="text"></IonInput>
        </IonRow>
      </IonItem>
      <IonItem>
        <IonRow>
          <IonCol>Mot de passe</IonCol>
        </IonRow>
        <IonRow>
          <IonInput ref={passInputRef} type="password"></IonInput>
        </IonRow>
      </IonItem>
      <IonRow><p className="versInsText">Vous n'avez pas encore de compte?</p></IonRow>
      <p className="versInsText">Créez-en un maintenant <Link to="/inscription">Cliquez-ici</Link></p>
      <IonRow>
        <IonCol>
          <IonButton className="loginbutton" type="submit" routerLink="/recording">Connexion</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
    </form>
      </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
