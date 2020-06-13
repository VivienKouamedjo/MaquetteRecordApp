import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { personOutline, bookOutline, pulseOutline, headsetOutline, discOutline, settingsOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Profil',
    url: '/profil',
    iosIcon: personOutline
  },
  {
    title: 'M\'enregistrer ',
    url: '/recording',
    iosIcon: discOutline,
  },
  {
    title: 'Mes enregistrements',
    url: '/listrecord',
    iosIcon: headsetOutline,
  },
  {
    title: 'Mes statistiques',
    url: '/statistiques',
    iosIcon: pulseOutline
  },
  {
    title: 'En savoir plus',
    url: '/about',
    iosIcon: bookOutline,
  },
  {
    title: 'Déconnexion',
    url: '/',
    iosIcon: settingsOutline ,
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="record-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
