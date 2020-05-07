import React from 'react';
import {Switch, Route} from 'react-router-dom'
import LoginScreen from '../LoginScreen/LoginScreen'
import RegistrationScreen from '../../components/RegistrationScreen/RegistrationScreen'


const Main = props =>(
    <Switch>
       <Route exact path="/" component={LoginScreen}></Route>
       <Route exact path="/login" component={LoginScreen}></Route>
       <Route exact path="/register" component={RegistrationScreen}></Route>
    </Switch>
);

export default Main;