import {useEffect, useState} from "react"
import {user} from "../services/randomUser"
import { util } from "../services/help"

const userList = user.get()

export const UserList = () => {
  const [list, setList] = useState([])
  const [err, setErr] = useState(null)
  const [load, setLoad] = useState(false)
  
  //Get results from "randomUser"
  useEffect(()=>{
    userList.then(
    res=>{
      setLoad(true)
      setList(res.results)
    },
    err=>{
      setLoad(true)
      setErr(err)
    })
  },[])

  //Draw table and get values
  const tableUser = ()=>{
    return list.map(item =>{
      const fullName = `${item.name.first} ${item.name.last}`
      const gender = item.gender
      const birth = util.formatData(item.dob.date)

      const buttonEdit = "Editar"
      const buttonRemove = "Remover"

      return(

      <tr key={item.id}>
        <td>{fullName}</td>
        <td>{gender}</td>
        <td>{birth}</td>

        <td>
          <div>{buttonEdit}</div>
          <div>{buttonRemove}</div>
        </td>
      </tr>

      )
    })
  }


  //Print in screen, current situation in this programs.

  if(err){ 
    return <div>Error: {err.message}</div>
  }
  else if (!load){
    return <div>Loading...</div>
  }
  else{
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth</th>
          <th>Actions</th>
        </tr>
      { //Call for screen, the Draw table
        tableUser()
      }
      </table>
    )
  }
 
}
