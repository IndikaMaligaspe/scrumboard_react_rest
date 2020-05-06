import Rect, {Component} from 'react'

const URLS = {
    loginURL: "http://localhost:8000/api/token/",
}

 const PropertyGet =  (props) => {
    const key = props.key
    if (key){
        return URLS[key]
    }
}


export {PropertyGet}