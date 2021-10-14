import React, { useEffect } from 'react'
import './Alert.css';
function Alert({ type, msg, removeAlert}) {
    useEffect(()=> {
     const timeout = setTimeout(() => {
        removeAlert()
     },1000)   
     return () => clearTimeout(timeout)
    },[])
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default Alert
