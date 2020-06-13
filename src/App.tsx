import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Recording from './pages/Recording/Recording';
import Statistiques from './pages/Statistiques/Statistiques';
import About from './pages/About/About';
import Inscription from './pages/Inscription/Inscription';
import ListShower from './pages/Listrecord/Listshower';
import Profil from './pages/Profil/profil';
import Menu from './components/Menu';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/inscription" component={Inscription} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/recording" component={Recording} />
          <Route path="/listrecord" component={ListShower} />
          <Route path="/statistiques" component={Statistiques} />
          <Route path="/about" component={About} />
          <Route path="/profil" component={Profil} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
