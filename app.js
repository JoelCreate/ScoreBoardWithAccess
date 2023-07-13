let accessCode = document.getElementById("code")
const enterCode = document.getElementById("enter-code")
const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", function(e){    
    e.preventDefault()
    if (enterCode.value === accessCode.value) {
       // window.open("../app.html")
       console.log("it matches")
    }
})


function enterApp() {    
    accessCode.innerHTML =  Math.floor(Math.random() * 900000)  
}

enterApp()

