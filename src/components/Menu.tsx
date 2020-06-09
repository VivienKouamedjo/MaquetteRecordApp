import React from "react";
import { IonMenu, IonHeader, IonTitle, IonToolbar, IonContent, IonList, IonItem, IonButton, IonRouterOutlet } from "@ionic/react";


export const MenuExample: React.FC = () => (
    <>
      <IonMenu side="start" content-id="main-page">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/recording">M'enregistrer</IonItem>
            <IonItem>Mes enregistrements</IonItem>
            <IonItem>Mes statistiques</IonItem>
            <IonItem>Mon profil</IonItem>
            <IonItem>En savoir plus</IonItem>
            <IonItem><IonButton>Déconnexion</IonButton></IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet></IonRouterOutlet>
      </>
);