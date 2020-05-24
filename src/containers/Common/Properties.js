// import Rect, {Component} from 'react'

const URLS = {
    loginURL: "http://localhost:8000/api/token/",
    homeURL: "/home",
    sprintAPIURL:'http://localhost:8000/api/sprints',
    sprintDetailsAPIURL:'http://localhost:8000/api/tasks?sprint=',
    taskDetailsAPIURL:'http://localhost:8000/api/tasks/',
    userDetailsAPIURL:'http://localhost:8000/api/users',
    taskCreateAPIURL:'http://localhost:8000/api/tasks',
    registUserAPIURL:'http://localhost:8000/api/users',
}

 const PropertyGet =  (props) => {
    const key = props.key
    
    if (key){
        return URLS[key]
    }
}


export {PropertyGet}