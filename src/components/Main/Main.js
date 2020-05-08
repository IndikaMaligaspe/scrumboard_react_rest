import React from 'react';
import {Switch, Route} from 'react-router-dom'
import LoginScreen from '../LoginScreen/LoginScreen'
import RegistrationScreen from '../../components/RegistrationScreen/RegistrationScreen'
import HomeScreen from '../Home/Home'


const Main = props =>(
    <Switch>
       <Route exact path="/" component={LoginScreen}></Route>
       <Route exact path="/login" component={LoginScreen}></Route>
       <Route exact path="/register" component={RegistrationScreen}></Route>
       <Route exact path="/home" component={HomeScreen}></Route>
    </Switch>
);

export default Main;