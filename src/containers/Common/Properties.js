// import Rect, {Component} from 'react'

const URLS = {
    loginURL: "http://localhost:8000/api/token/",
    homeURL: "/home",
    sprintAPIURL:'http://localhost:8000/api/sprints',
    sprintDetailsAPIURL:'http://localhost:8000/api/tasks?sprint=',
}

 const PropertyGet =  (props) => {
    const key = props.key
    
    if (key){
        return URLS[key]
    }
}


export {PropertyGet}