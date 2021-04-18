import ReactDOM from 'react-dom';
import React from "react"

export default async function showSoldiersRank() {
    ReactDOM.render(<p> See Point Leader Board </p>, document.getElementById("formdiv"))

    let table = (      
    <table id="table">
    <thead>
      <tr>
        <th width="100px" text-align="right"> Rank </th>
        <th width="300px" test-align="right"> Nickname@Day </th>
        <th width="70px" text-align="right"> Score % </th>
      </tr>
    </thead>
    <tbody id="tbody"> </tbody>
    </table>
  )
    
    
//    try{
    let response = await fetch("http://localhost:5000/soldiers/read/all")
    let Soldiers = await response.json() //.json() is aysnc
    Soldiers.sort((a,b) => {return b.score - a.score})
    
    const soldiersContent = Soldiers.map((soldier, index) => {return (
        <tr>
                <td> {index +1} </td>
                <td> {soldier.nickname} </td>
                <td> {soldier.score} </td>
        </tr>     
    )})
  
    // I was using the innerHTML but it doesnot work show [object, Object]
    ReactDOM.render(table, document.getElementById("tablediv"))
    ReactDOM.render(soldiersContent, document.getElementById("tbody"))
//    } catch (error) { new Error("Fetch soldiers data failed!")}
  }

