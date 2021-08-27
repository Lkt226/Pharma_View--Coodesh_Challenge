# Backup old codes

## RandomUser

const url = "https://randomuser.me/api/"

export const user = {
//Get "X" users in api
random: (result) => {
result = `?results=${result}`
const path = result
util.standard(path, "")
return user.get(path).then((value)=>{return value})
},

//Get user from API
get: async (path)=> {
path = util.standard(path, "")

    return await fetch(url+path,{
      method:"GET",
    })
    .then(res => {
      if (!res.ok){
        return new Error("fail request")}

      if (!res.status === 404){
        return new Error("not found")}

      return res.json()
    })
    .then((json)=>{
      const list = json
      return list

    })}

}

## Listing Users

import React, { useEffect, useState } from "react"
import {user} from "../services/randomUser"

const userItem = user.random()

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
