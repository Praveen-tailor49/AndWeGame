import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';


const AuthUser = ({cmp, baseUrl}) => {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('token')){
            navigate('/')
        }



    }, [])

    return (
        <>
            <Cmp  baseUrl={baseUrl}/>
        </>
    )
}

export default AuthUser