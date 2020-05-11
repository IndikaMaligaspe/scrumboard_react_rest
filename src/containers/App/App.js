import React from 'react';
import './App.css';
import Main from '../../components/Main/Main'
import {Layout} from '../../components/Layout/Layout'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'


function App() {
 
  return (
      <React.Fragment>
        <NavigationBar/>
          <Layout >
            <Main />         
          </Layout>
      </React.Fragment>
  );
}

export default App;
