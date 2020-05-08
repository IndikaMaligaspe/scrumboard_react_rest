import React   from 'react';
import Login from '../../containers/Login/Login';

import { LoginScreenLayout } from '../Layout/Layout';

const LoginScreen = (props) =>(
            <LoginScreenLayout>
                <Login/>
            </LoginScreenLayout>
);

export default LoginScreen;