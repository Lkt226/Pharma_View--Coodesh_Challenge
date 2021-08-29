
import { Button, Alert, Table } from "react-bootstrap"
import {util} from "../services/help"
import {user} from "../services/randomUser"
import { useState, useEffect } from "react"




let path = {welcome: "I am", Name: "Walder Mike", WhatsDoTalk: "Hello"}
console.log(path.values(path))
const userList = user.get(10)

export const BtsList = () => {

  const [err, setErr] = useState(null)
  const [load, setLoad] = useState(false)
  const [player, setPlayer] = useState([])

  let limitUser = 5

  const [render, setRender] = useState([])
  
  useEffect(()=>{
    userList.then(
      res=>{
        setLoad(true)
        setPlayer(res.results)
        limitUsers(res.results)
      },
      err=>{
        setLoad(true)
        setErr(err)
      })
    },[])
    
    const renderPlayer = (player, index) =>{
      return(
        <tr key={index}>
        <td>{player.name.first}</td>
        <td>{player.gender}</td>
        <td>{player.dob.date}</td>
        <td>
          <img src="" alt="edit"/>
          <img src="" alt="remove" onClick={()=>{remove(player)}}/>
        </td>
      </tr>
    )
  }
   
  const searchUser = (e)=>{
    const searchString = e.target.value.toLowerCase()

    const filterUsers = player.filter((user) => {

      return (
         util.include(
          [
            user.name.first,  
            user.location.country,
            user.nat
          ], 
            searchString)
       )
    })
    limitUsers(filterUsers)
  }

  const isMale = ()=>{
    const searchGender = "male"
    
    limitUsers(player)
  }

  const limitUsers = (source)=>{
    console.log(source)
    if(source.length > limitUser){
      setRender(source.slice(0, limitUser).map(renderPlayer))
    }else{
      setRender(source.map(renderPlayer))
    }
    
  }

  const moreLimit = () =>{
    limitUser = limitUser + 5
    limitUsers(player)
  }

  const remove = (user) => {
    console.log(user)
  }
  
  const styleTr = {
    backgroundColor: "#d3d8d9" ,
    fontSize: "1.7rem",
    border: "2px solid #a5a5a5"
  }

  return(
    <div className="container table-bordered text-center table table-hover table-responsive" style={{border: "2px solid #a5a5a5"}}>
      <div className="w-100 d-inline-flex">
      <input className="w-100" type="search" name="search" id="search" onKeyUpCapture={searchUser}/>
      <img src="" alt="gender" onClick={isMale}/>
      </div>
       
      <Table>
        <thead>
          <tr style={styleTr}>
            <th>Name</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            render
          }
        </tbody>
        <tfoot>
          <th>
            <button onClick={moreLimit}>More</button>
          </th>
        </tfoot>
      </Table>
    </div>
  )

}