import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React from "react";
import './About.css';

const About: React.FC = () => {



    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <p className="centeredTitle">Renseignements</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            
            </IonContent>
        </IonPage>
       
    );


};

export default About;