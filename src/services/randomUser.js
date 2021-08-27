//Help codes for simplify my life :D
const url = "https://randomuser.me/api/"

const RandUser = {
  //Create users from API: https://randomuser.me/api/
  createUser: async (path)=> {
    return fetch(url + path, {method: "GET"})
    .then(res => {
      if (!res.ok){
        return new Error(`fail request:${res}`)}

      if (!res.status === 404){
        return new Error("not found 404")}

      return res.json()
    })
    .then((res)=>{return res.results})
  }
}
//Get users created in createUser
export const user = {
  get: (amount, gender)=>{
    amount === undefined ? amount = "" : amount = `results=${amount}&`;
    gender === undefined ? gender = "" : gender = `gender=${gender}&`;

    const path = `?${amount}${gender}`
    return RandUser.createUser(path)
  }
}