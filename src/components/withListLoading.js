import { Component } from "react"

export function WithListLoading(component) {
  return function WihLoadingComponent({isLoading, ...props}) {
    if (!isLoading) return <Component {...props}/>
    return(
      <p style={{textAling: "center", fontSize: "30px"}}>
        a
      </p>
    )
  }
}