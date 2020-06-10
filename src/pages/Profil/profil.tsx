import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonText, IonLabel } from "@ionic/react";
import React, { useContext } from "react";
import { UserContext } from "../../components/UserProvider";

const Profil: React.FC = () => {

    const user = useContext(UserContext);

    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <p className="centeredTitle">Liste des enregistrements</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contentProfile">
                <h2>Mes informations</h2>                
                <IonLabel>Mail: </IonLabel><IonText>{user.email}</IonText>
            </IonContent>
        </IonPage>
       
    );


};

export default Profil;