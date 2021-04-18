import ReactDOM from 'react-dom';
import React from "react"


// This will store the correct answer
export let correctAnswer = []
export let count

export default async function showTests() {
    ReactDOM.render(<p>  </p>, document.getElementById("tablediv"))




    let form = (
    <form id="testForm" onSubmit={submit}> 
        <label> Your NickName </label> 
        <input type="text" name="nickname" required/>   
        <span>    Closebook Test and treat it as an Interview </span>
        
        <div id="testsContent" >  The Main Content is Here  </div> <br/>
        
        <p> Submit then check the Point Leader Board </p>
        <input type="submit"/> 
    </form>
    )

//    try{  
    let response = await fetch("/tests/read/all")
    let raw = await response.json() //.json() is aysnc
//  randome sort the array and grab the first 5 questions    
    let shuffled = raw.sort(() => 0.5 - Math.random)
    let Questions = shuffled.slice(0,5) // I can adjust which question to be shown here
    count = Questions.length
    correctAnswer = Questions.map(question => question.correct)
    console.log(correctAnswer) 
    const testsContent = Questions.map((question, index) => {return (
        <div>
            <p> Question {index+1} : {question.question} </p>
            <label > A: </label> 
            <input type="radio" name={"question" + index} value="A" required/> 
            <label > {question.A} </label> <br/> 
            <label > B: </label> 
            <input type="radio" name={"question" + index} value="B" /> 
            <label > {question.B} </label> <br/> 
            <label > C: </label>         
            <input type="radio" name={"question" + index} value="C" /> 
            <label > {question.C} </label> <br/>  
            <label > D: </label>       
            <input type="radio" name={"question" + index} value="D" /> 
            <label > {question.D} </label> <br/>       
        </div>
    )})
    
    ReactDOM.render(form, document.getElementById("formdiv"))
    // I was using the innerHTML but it doesnot work show [object, Object]
    ReactDOM.render(testsContent, document.getElementById("testsContent"))
//    } catch (error) {new Error("Fetch tests data failed!")}
  }

//    try{

    
async function submit() {
    let yourAnswer = []
    for (let i=0; i< count; i++) {
        yourAnswer.push(document.forms.testForm.elements["question" + i].value)
    }
//  Make comparison   
    let score = 0
    for (let i=0; i< count; i++) {
        if (yourAnswer[i] === correctAnswer[i]) {score ++}
    }
//  convert to 100%    
    score = Math.floor(score/count * 100)
    let nickname = document.forms.testForm.elements["nickname"].value + "@" + (new Date().toLocaleString().split('GMT')[0])
    
    storeInDatabase(nickname, score, yourAnswer)   
//  below this line is also fine   

    let displayResult = (
        <div>
            <p>  </p>           
        </div>
        )

    ReactDOM.render(displayResult, document.getElementById("formdiv"))
    
    }
//

async function storeInDatabase(nickname, score, yourAnswer) {
    let soldierdata = JSON.stringify({nickname: nickname, score: score})//The format is special, on internet will be 'content' as string
    let response = await fetch("/soldiers/create", {method: "POST", body: soldierdata, headers: {"Content-type": "application/json"}}); 
    //The response, need to parse it and find the id    
    let soliderResponse = await response.json()
    let soldierId = soliderResponse._id
    ReactDOM.render(<p> Your nickname is {nickname}, Your answer: {yourAnswer} Correct Answer: {correctAnswer}, <br/> your score is {score}, your reference number is {soldierId} </p>, document.getElementById("formdiv"))  }
//    } catch (error) {new Error("Store players data failed!")}

