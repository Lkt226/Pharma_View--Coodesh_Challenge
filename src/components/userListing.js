import React, { useEffect, useState } from "react"
import {user} from "../services/randomUser"

const userItem =  user.random()

export const List = () => {
  const [err, setErr] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [item, setItems] = useState([])


  useEffect(()=>{
    userItem.then(
      (res)=>{
      setIsLoaded(true)
      setItems(res.results)
      console.log(res.results)
    },
      (err)=>{
        setIsLoaded(true)
        setErr(err)
      }
    ) 
  }, [])

  if(err){
    return <div>Error: {err.message}</div>
  }else if (!isLoaded){
    return <div>Loading...</div>
  }else{
    return(
      <table>
        {
         item.map(i =>( 
           <tr key={i.id}>
             <td className="name">{`${i.name.first} ${i.name.last}`}</td>
             <td className="gender">{i.gender}</td>
             <td className="bird">{i.dob.date}</td>
             <td className="actions">Editar e excluir</td>
           </tr>
         )) 
        }
      </table>
    )

  }
}
