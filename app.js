let accessCode = document.getElementById("access-code")
const pinInput = document.getElementById("pin-input")
const submitBtn = document.getElementById("submit-btn")
  

accessCode.value =  Math.floor(Math.random() * 900000)

function enterApp() {   

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault()

        const enteredPIN = pinInput.value
        const correctPIN = accessCode.value

        if (enteredPIN === correctPIN) {
            window.open("../app.html")
        } else {
            alert ("incorrect access code")
        }

    })

}

enterApp()

