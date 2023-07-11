let accessCode = document.getElementById("code")
const enterCode = document.getElementById("enter-code")
const submitBtn = document.getElementById("submit-btn")


function enterApp() {
    
    accessCode.innerHTML =  Math.floor(Math.random() * 900000)

    if (enterCode.value === accessCode) {
        window.location.href = '/app.html';
    }

}

enterApp()