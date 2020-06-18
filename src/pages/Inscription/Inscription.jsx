import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonIcon } from "@ionic/react";
import React, { useRef, FormEvent, Component } from "react";
import './Inscription.css';
import { checkmarkOutline } from "ionicons/icons";
import {register} from '../../components/UserFunctions';

class Inscription extends Component{

    constructor() {
        super()
        this.state = {
          genre: '',
          tranche_d_age: '',
          pays: '',
          ville: '',
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
    
        const newUser = {
          genre: this.state.genre,
          tranche_d_age: this.state.tranche_d_age,
          pays: this.state.pays,
          ville: this.state.ville,
          email: this.state.email,
          password: this.state.password
        }
    
        register(newUser).then(res => {
          this.props.history.push(`/login`)
        })
      }

    render(){
    
    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <p className="centeredTitle">Inscription</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contenu">
                <form onSubmit={this.onSubmit}>
                    <IonLabel><p className="centeredLabel">Genre</p></IonLabel>
                    <IonSelect className="input" value={this.state.genre} onChange={this.onChange}>
                        <IonSelectOption>Homme</IonSelectOption>
                        <IonSelectOption>Femme</IonSelectOption>
                    </IonSelect>    
                    <IonLabel><p className="centeredLabel">Tranche d'age</p></IonLabel>
                    <IonSelect className="input" value={this.state.tranche_d_age} onChange={this.onChange}>
                        <IonSelectOption>18-25 ans</IonSelectOption>
                        <IonSelectOption>26-35 ans</IonSelectOption>
                        <IonSelectOption>36-50 ans</IonSelectOption>
                        <IonSelectOption>Autre</IonSelectOption>
                    </IonSelect>
                    
                    <IonLabel><p className="centeredLabel">Pays d'origine</p></IonLabel>
                    <IonInput placeholder="France" className="input" type="text" value={this.state.pays} onChange={this.onChange} required></IonInput>

                    <IonLabel><p className="centeredLabel">Ville d'origine</p></IonLabel>
                    <IonInput placeholder="France" className="input" type="text" value={this.state.ville} onChange={this.onChange} required></IonInput>

                    <IonLabel><p className="centeredLabel">Pseudo</p></IonLabel>

      
                    <IonInput placeholder="" className="input" type="text" value={this.state.email} onChange={this.onChange} required></IonInput>
  
  
                    <IonLabel><p className="centeredLabel" value={this.state.password} onChange={this.onChange}>Mot de passe</p></IonLabel>
                    <IonInput  type="password"  className="input" required></IonInput>
                    <IonButton className="loginbutton" type="submit" routerLink="" color="tertiary"><IonIcon icon={checkmarkOutline}></IonIcon></IonButton>    
                </form>

            </IonContent>
        </IonPage>
       
    );
    }
};

export default Inscription;