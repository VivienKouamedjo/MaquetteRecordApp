import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonText, IonLabel, IonGrid, IonRow, IonIcon, IonModal, IonSelect, IonSelectOption, IonInput, IonButtons, IonMenuButton } from "@ionic/react";
import React, { useContext, useState, FormEvent, useRef } from "react";
import { UserContext } from "../../components/UserProvider";
import { createOutline, shieldOutline, checkmarkOutline } from "ionicons/icons";
import './profil.css';

const Profil: React.FC = () => {

    const user = useContext(UserContext);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalPass, setShowModalPass] = useState(false);
    const mailInputRef = useRef<HTMLIonInputElement>(null);
    const countryRef =  useRef<HTMLIonInputElement>(null);
    const passInputRef = useRef<HTMLIonInputElement>(null);
    const passAncInputRef = useRef<HTMLIonInputElement>(null);
    const passconfInputRef = useRef<HTMLIonInputElement>(null);
    const submitForm = (e: FormEvent) =>{};




    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                        <IonMenuButton />
                </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Profil</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contentProfil" >
            <IonGrid>
                <h2>Mes informations</h2>  
                <div className="realcontent">            
                <IonRow><IonLabel>Mail: </IonLabel><IonText className="infos"> {user.email}</IonText></IonRow>
                <IonRow><IonLabel>Genre: </IonLabel><IonText className="infos"> {user.genre}</IonText></IonRow>
                <IonRow><IonLabel>Tranche d'âge: </IonLabel><IonText className="infos"> {user.tranche_d_age}</IonText></IonRow>
                <IonRow><IonLabel>Pays d'origine: </IonLabel><IonText className="infos"> {user.pays}</IonText></IonRow>
                <IonRow><IonLabel>ville d'origine: </IonLabel><IonText className="infos"> {user.ville}</IonText></IonRow>
                <IonModal isOpen={showModalInfo} swipeToClose={true} cssClass="custom-modal">
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

                <IonButton className="loginbutton" type="submit" routerLink="" color="tertiary"><IonIcon icon={checkmarkOutline}></IonIcon></IonButton>    
                 </form>
                <IonButton onClick={() => setShowModalInfo(false)}>Close Modal</IonButton>
                </IonModal>


                <IonModal isOpen={showModalPass} cssClass='custom-modal'  swipeToClose={true}>
                        <IonLabel><p className="centeredLabel">Mot de passe</p></IonLabel>
                        <IonInput ref={passInputRef} type="password"  className="input" required></IonInput>
                        <IonLabel><p className="centeredLabel">Nouveau mot de passe</p></IonLabel>
                        <IonInput ref={passAncInputRef} type="password"  className="input" required></IonInput>
                        <IonLabel><p className="centeredLabel">Confirmer mot de passe</p></IonLabel>
                        <IonInput ref={passconfInputRef} type="password"  className="input" required></IonInput>
                        <IonButton onClick={() => setShowModalPass(false)}>Close Modal</IonButton>
                </IonModal>


                <IonRow><IonButton onClick={() => setShowModalInfo(true)} color="tertiary" className="boutonModalInfo"><IonIcon icon={createOutline} slot="start"></IonIcon>Modifier mes informations</IonButton></IonRow>
                <IonRow><IonButton onClick={() => setShowModalPass(true)}><IonIcon icon={shieldOutline} slot="start" color="tertiary" className="boutonModalPass"></IonIcon>Modifier mon mot de passe</IonButton></IonRow>
                </div>  
            </IonGrid>
            </IonContent>
        </IonPage>
       
    );


};

export default Profil;