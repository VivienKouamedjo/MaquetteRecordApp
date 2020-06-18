import React, {Component, useState, useContext} from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonButton, IonIcon, IonText, IonMenuButton } from '@ionic/react';
import { discOutline, ellipsisHorizontalOutline, headsetOutline, stopOutline } from 'ionicons/icons';
import './Recording.css';
import { audiorecorder } from '../../components/UserFunctions';
import ReactMic from '../../components/ReactMic'; 
import Listrecord from '../Listrecord/Listrecord';
import { UserContext } from '../../components/UserProvider';

class Recording extends Component{

  tab_records = [];
  /*Use context to update recording list */

  constructor(props) {
    super(props)
    this.state = {
      downloadLinkURL: null,
      isRecording: false,
      recordingStarted: false,
      recordingStopped: false,
      record : null,
      version_record:"None",
      ref_micro_record:"None",
      ref_device_record:"None"
    }
    


    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    //e.preventDefault()
    const newRecord = {
      record: this.state.record,
      version_record: this.state.version_record,
      ref_micro_record: this.state.ref_micro_record,
      ref_device_record: this.state.ref_device_record
    }

  }

  stopRecording= () => {
    this.setState({ isRecording: false })
  }

  onSave=(blobObject) => {
    this.setState({
      downloadLinkURL: blobObject.blobURL
    })
  }

  onStart=() => {
    console.log('You can tap into the onStart callback')
  }

  onStop = (blobObject) => {
    this.setState({ blobURL: blobObject.blobURL })
    this.setState({ record: blobObject.blobURL })
    this.tab_records.push(this.state.record);
  }
    


  getRecord = () =>{
    return this.state.record
  }

  getVersion = () =>{
    return this.state.version_record
  }

  onData(recordedBlob){
    // console.log('ONDATA CALL IS BEING CALLED! ', recordedBlob);
  }

  onBlock() {
    alert('ya blocked me!')
  }

  startRecording = () => {
    this.setState({
      isRecording: true,
      recordingInSession: true,
      recordingStarted: true,
      recordingStopped: false,
      isPaused: false
    })
    console.log("Recording started")
  }

  stopRecording=() => {
    this.setState({
      isRecording: false,
      recordingInSession: false,
      recordingStarted: false,
      recordingStopped: true
    })
    console.log(this.tab_records)
  }
  render() {
    const tableauEnr = this.context;
    const {
      blobURL,
      downloadLinkURL,
      record,
      isRecording,
      recordingInSession,
      recordingStarted,
      recordingStopped
    } = this.state

    const recordButton = discOutline;
    const stopBoutton = stopOutline;
    
     
    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <p className="centeredTitle">Enregistrement vocal</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contentRecording">
            <ReactMic
                className="oscilloscope"
                record={isRecording}
                visualSetting="sinewave"
                audioBitsPerSecond={128000}
                onStop={this.onStop}
                onStart={this.onStart}
                onSave={this.onSave}
                onData={this.onData}
                onBlock={this.onBlock}
                onPause={this.onPause}
              />
            <div className="loadingPositionner">
                {/* Hidden before the recording */}
                <IonIcon icon={recordingInSession? ellipsisHorizontalOutline: ""} size="large" className="loadingIcon"></IonIcon>
                <p className="actionDescription"> {recordingInSession?"Enregistrement en cours": ""}</p>
            </div>
                {/*IconRecord should be StopOutline while recording is running */}
                <IonIcon icon={discOutline} color="dark" className="iconRecord"></IonIcon>

                <IonButton fill="clear" className="buttonPositioner" onClick={() => this.startRecording()}>
                
                {/* Lancer should be replaced by Arreter while recording is running */}
                    <IonText color="dark">Lancer</IonText>
                </IonButton>
                <IonButton fill="clear" className="buttonPosition" onClick={() => {
                  this.stopRecording()
                  }}>
                
                {/* Lancer should be replaced by Arreter while recording is running */}
                    <IonText color="dark">Arrêter</IonText>
                </IonButton>
            <form onSubmit={this.onSubmit()}>
            <div className="listEnregistrementPositioner">
                <IonButton routerLink="../" className="boutonListe" color="tertiary">
                    <IonIcon slot="start" icon={headsetOutline}></IonIcon>
                    Ecouter mes enregistrements
                </IonButton>
            </div>
            </form>
            </IonContent>
        </IonPage>
       
    )
}
}

export default Recording;