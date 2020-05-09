import React, {Component} from 'react';
import queryString from 'query-string';

class SprintDetails extends Component{

    state  = {
        id: '',
    }
   
    constructor(props){
        super(props)
        let {id} =  this.props.match.params
        this.state.id = id;
    }

    componentDidMount(){
       console.log('id - '+this.state.id);
    }

    render(){
        return(
            <div>tuutut</div>
        );
    }
}

export default SprintDetails;