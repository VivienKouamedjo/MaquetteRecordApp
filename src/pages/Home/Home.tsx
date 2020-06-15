import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput,IonLabel, IonIcon, IonRouterLink } from '@ionic/react';
import React, { useRef, FormEvent } from 'react';
import './Home.css';
import { checkmarkOutline } from 'ionicons/icons';

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
          <IonTitle><p className="centeredTitle">Connexion</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
      <fieldset className="form">
      <form onSubmit={submitForm}>
          <IonLabel><p className="centeredLabel">Pseudo</p></IonLabel>
      
          <IonInput ref={mailInputRef} placeholder="" className="input" type="text" required></IonInput>
  
  
            <IonLabel><p className="centeredLabel">Mot de passe</p></IonLabel>
          <IonInput ref={passInputRef} type="password"  className="input" required></IonInput>
      <p className="versInsText">Vous n'avez pas encore de compte?</p>
      <p className="versInsText">Créez-en un maintenant <IonRouterLink color="primary" href="/inscription">Cliquez-ici</IonRouterLink></p>
        
          <IonButton className="loginbuttonAcc" type="submit" routerLink="/Accueil" color="tertiary"><IonIcon icon={checkmarkOutline}></IonIcon></IonButton>
    </form>
      </fieldset>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
