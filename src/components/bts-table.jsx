
import { Button, Alert, Table } from "react-bootstrap"
import {util} from "../services/help"
import * as ReactBootStrap from "react-bootstrap"
import { useState } from "react"

export const BtsList = () => {
  const player = [
    {position: "Atacante", name: "Menino Ney", team: "Brasil"},
    {position: "Centro", name: "Jogador caro", team: "Brasil"},
    {position: "Goleiro", name: "Wagner Moura", team: "Brasil"},
  ]

  const renderPlayer = (player, index) =>{
    return(
      <tr key={index}>
        <td>{player.position}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
      </tr>
    )
  }

  const [render, setRender] = useState(player.map(renderPlayer))

  const searchUser = (e)=>{
    const searchString = e.target.value.toLowerCase()

    const filterUsers = player.filter((user) => {

      return (
         util.include(
          [
            user.name, 
            user.position, 
            user.team
          ], 
            searchString)
       )
    })
    setRender(filterUsers.map(renderPlayer)) 
  }

  const styleTr = {
    backgroundColor: "#d3d8d9" ,
    fontSize: "1.7rem",
    border: "2px solid #a5a5a5"
  }

  return(
    <div className="container table-bordered text-center table table-hover table-responsive" style={{border: "2px solid #a5a5a5"}}>
      <input type="search" name="search" id="search" onKeyUpCapture={searchUser}/>
      <Table>
        <thead>
          <tr style={styleTr}>
            <th>Position</th>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {
            render
          }
        </tbody>
      </Table>
    </div>
  )

}