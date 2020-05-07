import React , { Component } from 'react';
import Login from '../../components/Login/Login';

import { LoginScreenLayout } from '../../components/Layout/Layout';

class LoginScreen extends Component{
    render() {
        return (
            
            <LoginScreenLayout>
                <Login/>
            </LoginScreenLayout>
        );
    }
}

export default LoginScreen;