import React from 'react';
import Home from './Home';
import ReactDOM from "react-dom"

import showSoldiersRank from "./showSoldiersRank.js"
import showTests from "./showTests.js"



/* Not recommonded
{ document.getElementById("question").innerHTML = Math.floor(Math.random()* 100)}
*/

// the following function return JSX; Home is the component function
export default function App () {
  
  return (
    <div> 
      <Home name="FullStack War"/>  
      <h1> Prepare for job interview and code challenge</h1>
      
      <p id="question"> Ready for training? </p>
      
      <nav> 
        <input type="submit" value="Show Tests" onClick={showTests}/>
  
        <input type="submit" value="Show Point Leader Board" onClick={showSoldiersRank}/>
      </nav>

      <br/>
      <div id="formdiv" > <span id="test"> </span> </div>
      <div id="tablediv" > <span> </span> </div>
      


    </div>);
};

// App is a component function

/* The following is for testing purpose, for some reason, fetch doesnot work there
<input type="submit" onClick={test} value="Create new soldier by coding manually"/>                 
async function test() {
  let soldierdata = JSON.stringify({nickname: "PIPI", score: 0})//The format is special, on internet will be 'content' as string
  let response = await fetch("/soldiers/create", {method: "POST", body: soldierdata, headers: {"Content-type": "application/json"}}); 
  //The response, need to parse it and find the id    
  let soliderResponse = await response.json()
  let soldierId = soliderResponse._id
  ReactDOM.render(soldierId, document.getElementById("formdiv")
}
*/
