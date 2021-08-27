//Help codes for simplify my life :D
import { util } from "./help"
import React from "react"

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
