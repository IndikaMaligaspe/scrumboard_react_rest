import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {RegistrationScreenLayout} from '../../components/Layout/Layout';

class RegistrationScreen extends Component{
    state ={

    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <RegistrationScreenLayout></RegistrationScreenLayout>
            </React.Fragment>
        )
    }
}

export default withRouter(RegistrationScreen);