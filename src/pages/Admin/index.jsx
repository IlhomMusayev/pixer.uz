import Login from "../../components/login";
import axios from 'axios'
import { useAuth  } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import { client } from '../../utils/api-client'
import { Oval } from  'react-loader-spinner'

export default function Admins(){
    const [token] = useAuth();
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)

        
      useEffect(() => {
        setLoader(true)
        client(`admin`, {
          headers: {
            "authorization": token
          },
          method: "GET"
        }).then((data) => {
          if (data) {
            setData(data)
          }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {setLoader(false)})
      }, [token])


    return (
        <>
            <h1>Admin page</h1>
            <pre>
                {data?.admin}
            </pre>
            {loader? 
            <Oval height="50"
                  width="50"
                  color='black'
                  ariaLabel='loading'/>
                 :
                    ""}
        </>
    )
}
    