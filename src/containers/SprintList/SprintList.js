import React , {Component } from 'react'
import { PropertyGet } from '../../containers/Common/Properties'



class SprintList extends Component{

    state = {
        token:'',
        sprintURL: '',
        sprints: null
    }

    componentDidMount() {
        const url = PropertyGet ({key:"sprintAPIURL"})
        const token = localStorage.getItem('token')
        fetch(url, {
            method: 'GET',
            headers:{'Content-Type': 'application/json', 
            'Authorization':'Token '+token
            }
        }).then((response)=> response.json())
        .then(json => this.setState({ sprints: json}))
        .catch(e=>{
            console.log(e.message)
        });        
    }

    render(){
        const sprints = this.state.sprints
        console.log(sprints);
        return (
            <div>
                {sprints !== null &&
                  <div>
                     <ul>
                         <li>{sprints[1].name}</li>
                     </ul> 
                  </div>
                }
            </div>
        )
    }
}

export default SprintList;