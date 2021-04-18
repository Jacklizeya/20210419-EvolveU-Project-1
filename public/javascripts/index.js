async function StartTest() {
    // json response convert to Question object
    // let Questions = await (await fetch("/tests/read/all")).json()
    let response = await fetch("/tests/read/all")
    let Questions = await response.json() //.json() is aysnc

    let display = "The Bootcamp of the best Full Stack Developers <br> <br>"

    for(i=0; i<Questions.length; i++) {
        let question = 
        `
        <button> ${i+1} </button> <br>
        Question ${i+1} is ${Questions[i].question} <br>
        A: ${Questions[i].A} <br>
        B: ${Questions[i].B} <br>
        C: ${Questions[i].C} <br>
        D: ${Questions[i].D} <br> <br>
        <br>

        `
        display += question
    }

    document.getElementById("testContent").innerHTML = display
//  for testing purpose : only single quote works
//  document.getElementById("testContent") = <input type="submit" value="Test"/>
    document.getElementById("soldiersintraining").style.display = "none"
    document.getElementById("button").style.display = "none"
}

async function pointLeaderBoard() {
    let response = await fetch("/soldiers/read/all")
    let soldiers = await response.json()

    //let display = soldiers[0].nickname + " score is: " + soldiers[0].score
    let display = "The Point Leader Board" + "<br>" + "<br>"
    soldiers.sort((a,b) => {return b.score - a.score})
    for (i =0; i < soldiers.length; i++ ) {
        display += soldiers[i].nickname +" 's score is " + soldiers[i].score + "<br>"
    }

    document.getElementById("testContent").style.display = "none"
    document.getElementById("allplayer").innerHTML = display
    document.getElementById("soldiersintraining").style.display = "none"
}