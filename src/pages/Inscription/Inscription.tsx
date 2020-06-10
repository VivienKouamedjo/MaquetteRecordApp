import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonIcon } from "@ionic/react";
import React, { useRef, FormEvent } from "react";
import './Inscription.css';
import { checkmarkOutline } from "ionicons/icons";

const Inscription: React.FC = () => {

    const mailInputRef = useRef<HTMLIonInputElement>(null);
    const countryRef =  useRef<HTMLIonInputElement>(null);
    const passInputRef = useRef<HTMLIonInputElement>(null);
    const submitForm = (e: FormEvent) =>{};

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
                <form onSubmit={submitForm}>
                    <IonLabel><p className="centeredLabel">Genre</p></IonLabel>
                    <IonSelect className="input">
                        <IonSelectOption>Homme</IonSelectOption>
                        <IonSelectOption>Femme</IonSelectOption>
                    </IonSelect>    
                    <IonLabel><p className="centeredLabel">Tranche d'age</p></IonLabel>
                    <IonSelect className="input">
                        <IonSelectOption>18-25 ans</IonSelectOption>
                        <IonSelectOption>26-35 ans</IonSelectOption>
                        <IonSelectOption>36-50 ans</IonSelectOption>
                        <IonSelectOption>Autre</IonSelectOption>
                    </IonSelect>
                    
                    <IonLabel><p className="centeredLabel">Pays d'origine</p></IonLabel>
      
                    <IonInput ref={countryRef} placeholder="France" className="input" type="text" required></IonInput>
                    <IonLabel><p className="centeredLabel">Mail</p></IonLabel>
      
                    <IonInput ref={mailInputRef} placeholder="exemple@gmail.com" className="input" type="text" required></IonInput>
  
  
                    <IonLabel><p className="centeredLabel">Mot de passe</p></IonLabel>
                    <IonInput ref={passInputRef} type="password"  className="input" required></IonInput>
                    <IonButton className="loginbutton" type="submit" routerLink="/recording" color="tertiary"><IonIcon icon={checkmarkOutline}></IonIcon></IonButton>    
                </form>

            </IonContent>
        </IonPage>
       
    );


};

export default Inscription;