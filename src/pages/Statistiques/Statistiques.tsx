import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText, IonImg, IonButtons, IonMenuButton } from "@ionic/react";
import React from "react";
import './Statistiques.css';

const Statistiques: React.FC = () => {



    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                        <IonMenuButton />
                </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Statistiques</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contentStat">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="recordingNumber">
                                <span>{/* context on the recording array size to use there*/} </span>
                                <p>enregistrements réalisés</p>
                            </div> 
                        </IonCol>
                        <IonCol>
                            <div className="VerifiedNumber">
                                <span>{/* context on the recording array size to use there*/} </span>
                                <p>enregistrements vérifiés</p>
                            </div> 
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonText className="centeredPara">dont</IonText>
                    </IonRow>
               
                </IonGrid>
                
                <div id="emojiList">
                    <div className="coleremoji">
                        <IonImg src="../../../public/assets/colere.pngcolere.png" alt="colereEmoji"></IonImg>
                        <p>Colère</p>
                    </div>
                    {/* Icon integration problems */}
                    <div className="tristessemoji"></div>
                    <div className="neutremoji"></div>
                    <div className="peuremoji"></div>
                    <div className="degoutemoji"></div>
                    <div className="joiemoji"></div>
                    <div className="surprisemoji"></div>
                </div>
            </IonContent>
        </IonPage>
       
    );


};

export default Statistiques;