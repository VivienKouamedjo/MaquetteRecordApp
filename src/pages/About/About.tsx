import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from "@ionic/react";
import React from "react";
import './About.css';

const About: React.FC = () => {



    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                        <IonMenuButton />
                </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Renseignements</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Qui sommes-nous ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                    Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
                    Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
                </p>
                <h1>Qu’est ce que la reconnaissance automatique des émotions dans la voix ?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
                    dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
                </p>
                <h1>
                Qu’est-ce qu’une I.A et comment ça fonctionne ?
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                </p>
            </IonContent>
        </IonPage>
       
    );


};

export default About;