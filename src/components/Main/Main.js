import React from 'react';
import {Switch, Route} from 'react-router-dom'
import RegsitrationScreen from '../../containers/Registration/RegistrationContainer'
import HomeScreen from '../Home/Home'
import SprintDetails from '../../containers/SprintList/SprintDetails'
import Login from '../../containers/Login/Login'
import {LogoutLayout} from '../../components/Layout/Layout'


const Main = props =>(
    <Switch>
       <Route exact path="/" component={Login}></Route>
       <Route exact path="/login" component={Login}></Route>
       <Route exact path="/register" component={RegsitrationScreen}></Route>
       <Route exact path="/logout" component={LogoutLayout}></Route>
       <Route exact path="/home" component={HomeScreen}></Route>
       <Route exact path="/sprintDetails/:id" component={SprintDetails}></Route>
    </Switch>
);

export default Main;