
import { Button, Alert, Table } from "react-bootstrap"
import * as ReactBootStrap from "react-bootstrap"

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

  const styleTr = {
    backgroundColor: "#d3d8d9" ,
    fontSize: "1.7rem",
    border: "2px solid #a5a5a5"
  }

  return(
    <div>
      <Table className="container table-bordered text-center table table-hover table-responsive" style={{border: "2px solid #a5a5a5"}}>
        <thead>
          <tr style={styleTr}>
            <th>Position</th>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {
            player.map(renderPlayer)
          }
        </tbody>
      </Table>
    </div>
  )

}