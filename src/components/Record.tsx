import React, { useContext } from 'react';
/*import RecordContext from './RecordProvider';*/
import { IonItem, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import { playOutline, shareSocialOutline } from 'ionicons/icons';

const Record: React.FC<{name: string, duration: string}> = props =>{


    return (<div>
        <IonGrid>
            <IonRow>
            <IonCol size="6">
                <IonLabel>Enregistrements</IonLabel>
            </IonCol>
            <IonCol size="6">
                <IonLabel>Durée</IonLabel>
            </IonCol>
            </IonRow>
        </IonGrid>
        <IonItem>
            <IonLabel>{props.name}</IonLabel>
            <IonIcon icon={playOutline}></IonIcon>
            <IonIcon icon={shareSocialOutline}></IonIcon>
            <IonText>{props.duration}</IonText>
        </IonItem>
    </div>);
};

export default Record;