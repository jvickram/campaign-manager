import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import('./Components/Home'))
const AllCampaigns = React.lazy(() => import('./Components/AllCampaigns'))
const NewCampaign = React.lazy(() => import('./Components/NewCampaign'))

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <React.Suspense fallback={"loading..."}>
            <Switch>
              <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
              <Route exact path="/campaignslist" name="All Campaigns" render={props => <AllCampaigns {...props}/>} />
              <Route exact path="/newcampaign" name="All Campaigns" render={props => <NewCampaign {...props}/>} />
          </Switch>
        </React.Suspense>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
