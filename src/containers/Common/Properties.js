import Rect, {Component} from 'react'

const URLS = {
    loginURL: "http://localhost:8000/api/token/",
    homeURL: "/home",
}

 const PropertyGet =  (props) => {
    const key = props.key
    console.log(key);
    
    if (key){
        return URLS[key]
    }
}


export {PropertyGet}