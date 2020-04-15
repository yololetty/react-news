import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCLayout from "./pages/pc_layout";
import MobileLayout from './pages/mobile_layout';
import './assets/styles/pc.less';
import './assets/styles/mobile.less';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCLayout>
            {/* <Switch>
              <Route path="/common" render={() => (
                <Route path="/common/detail/:id" component={Detail} />
              )} />
              <Route path="/search" component={Search} />
              <Route path="/" render={() => (
                <Switch>
                  <Route path="/home" component={Home} />
                  <Redirect to="/home" />
                </Switch>
              )} />
            </Switch> */}
          </PCLayout>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileLayout />
        </MediaQuery>
      </Router>
    );
  }
}

export default App;