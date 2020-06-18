import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput,IonLabel, IonIcon, IonRouterLink } from '@ionic/react';
import React, { useRef, FormEvent } from 'react';
import './Home.css';
import { checkmarkOutline } from 'ionicons/icons';
import {login} from '../../components/UserFunctions';

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    console.log("Bonjour")
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    
  }
  render(){
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p className="centeredTitle">Connexion</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
      <form onSubmit={this.onSubmit}>
      <fieldset className="form">
          <IonLabel><p className="centeredLabel">email</p></IonLabel>
      
          <IonInput  placeholder="" className="input" type="text" value={this.state.email} onChange={this.onChange} required></IonInput>
  
  
            <IonLabel><p className="centeredLabel">Mot de passe</p></IonLabel>
          <IonInput type="password"  className="input" value={this.state.password} onChange={this.onChange} required></IonInput>
      <p className="versInsText">Vous n'avez pas encore de compte?</p>
      <p className="versInsText">Créez-en un maintenant <IonRouterLink color="primary" href="/inscription">Cliquez-ici</IonRouterLink></p>
        
          <IonButton className="loginbuttonAcc" type="submit" routerLink="/Accueil" color="tertiary"><IonIcon icon={checkmarkOutline}></IonIcon></IonButton>
      </fieldset>
      </form>
      </IonContent>
    </IonPage>
  );
};
}

export default Home;
