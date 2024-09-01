let modebtn = document.querySelector("#mode");
let modeName = "black";
let userScore = 0;
let compScore = 0;
let resultDisplay = document.getElementById("msg")
let userId=document.getElementById("user-score")
let compId=document.getElementById("computer-score")
let detail=document.getElementById("detail")



modebtn.addEventListener("click", () => {
    if (modeName === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        modeName = "dark";
        modebtn.innerHTML = "Light";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modeName = "light";
        modebtn.innerHTML = "Dark";
    }
});


const compGenerate = () => {
    const data = ["stone", "paper", "scissor"]
    const value = Math.floor(Math.random() * 3)
    return data[value]
}

const compare = (UserChoice, compChoice) => {
    if (UserChoice === compChoice) {
        resultDisplay.innerText = "Draw Play again!!"
    }
    else {
        if (UserChoice === "stone" && compChoice === "scissor") {
            resultDisplay.innerText = "user win"
            userScore++
            userId.innerText=`${userScore}`
            detail.innerText=`your choice is ${UserChoice} and computer choice is ${compChoice}`

        }
        else {
            if (UserChoice === "stone" && compChoice === "paper") {
                resultDisplay.innerText = "user loose"
                compScore++
                compId.innerText=`${compScore}`
                detail.innerText=`your choice is ${UserChoice} and computer choice is ${compChoice}`

            }
            else {
                if (UserChoice === "paper" && compChoice === "scissor") {
                    resultDisplay.innerText = "user loose"
                    compScore++
                    compId.innerText=`${compScore}`
                    detail.innerText=`your choice is ${UserChoice} and computer choice is ${compChoice}`


                }
                else {
                    if (UserChoice === "paper" && compChoice === "stone") {
                        resultDisplay.innerText = "user win"
                        userScore++
                        userId.innerText=`${userScore}`
                        detail.innerText=`your choice is ${UserChoice} and computer choice is ${compChoice}`

                    }
                    else {
                        if (UserChoice === "scissor" && compChoice === "stone") {
                            resultDisplay.innerText = "user loose"
                            compScore++
                            compId.innerText=`${compScore}`
                            detail.innerText=`your choice is ${UserChoice} and computer choice is ${compChoice}`


                        }
                        else {
                            if (UserChoice === "scissor" && compChoice === "paper") {
                                resultDisplay.innerText = "user win"
                                userScore++
                                userId.innerText=`${userScore}`
                                detail.innerText=`your choice is ${UserChoice} and computer choice is ${compChoice}`

                            }
                        }
                    }
                }
            }
        }
    }
}

const choices = document.querySelectorAll('.tag')

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        UserChoice = choice.id
        console.log("clicked  ", UserChoice)
        compChoice = compGenerate()
        console.log(compChoice)
        compare(UserChoice, compChoice)
    })
});

