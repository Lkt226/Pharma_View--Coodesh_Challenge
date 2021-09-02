
import {useState, useEffect} from "react"

import {Table} from "react-bootstrap"

import {util} from "../services/help"
import {user} from "../services/randomUser"

const get = {
userList: (amount, gender) => user.get(amount, gender)
}

export const UserTable = () => {
  /// Preload infos
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [player, setPlayer] = useState([])

  /// Organize parameters
  const [userLimit, setUserLimit] = useState(5)
  const maxPerPage = userLimit
  
  const [getGender, setGender] = useState("")

  /// Get Render to Screen
  const [getRender, setRender] = useState([])

  /// Path infos
  const path = {
    amount: 50
  }

  /// Get infos from api
  useEffect(()=>{
      render.getList()
    },[])

  const filter = {
    search: (e)=>{
      const search = e.target.value.toLowerCase()
      render.set(
        player.filter(user => {
          const info = render.infos(user)
          return (
            util.include([
                info.fu_name,
                info.nat
              ], search)
          )
        })
      )     
    },
    gender: (gender)=>{
      if (getGender === ""){
        setGender("male")
      }else if (getGender === "male"){
        setGender("female")
      }else{
        setGender("")
      }

      render.getList()  
    }
  }  

  const render = {
    infos: (player)=>{
      return {
        image: player.picture.medium,

        fi_name: player.name.first,
        la_name: player.name.last,
        fu_name: `${player.name.first} ${player.name.last}`,

        date: util.formatData(player.dob.date),
        gender: player.gender,

        nat: player.nat,
        endress:  `${player.location.state} / ${player.location.state}`,

        mail: player.email,
        tel: player.phone,
      }
    },
    player: (player, id)=> { 
      const info = render.infos(player)
   
      return (
      <tr key={id}>
        <td>{info.fu_name}</td>
        <td>{info.gender}</td>
        <td>{info.date}</td>

        <td>
          <input type="image" src="" alt="edit user"/>
          <input onClick={() => {actions.remove(player)}} type="image" src="" alt="remove user"/>
        </td>
      </tr>
    )},
    set: (source)=>{
      let limitedSource = [];

      for (let i = 0; i < source.length; i++) {
        if(i < userLimit) limitedSource.push(source[i])
      }
    
      source.length > userLimit ? 
        setRender(limitedSource.map(render.player)) :
        setRender(source.map(render.player))
    },
    getList: ()=>{
      get.userList(path.amount, getGender).then(
        res=>{
          setLoaded(true)
          setPlayer(res.results)
          render.set(res.results)
        },
        err=>{
          setLoaded(true)
          setError(err)
        })
    }
  }

  const actions = {
    more: ()=>{
      setUserLimit(userLimit+5)
      render.set(player)
    },
    remove: (e)=>{
      const item = e
      
    }

  }

  const style = {
  
  }

  return (
    <section id="user-list">
      <div className="">
        <input type="search" name="search-user" id="search-user" onKeyUp={filter.search}/>
        <input type="image" src="" alt="select a gender" id="select-user-gender" onClick={filter.gender}/>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Name</th> <th>Gender</th> <th>Date</th> <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getRender}
        </tbody>
        <tfoot>
          <tr>
            <th></th> <th></th> 
            <th> 
              <button id="more-users" onClick={actions.more}>
                More users ...
              </button> 
            </th> 
            <th></th> <th></th> 
          </tr>
        </tfoot>
      </Table>
    </section>
    
  )
}