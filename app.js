let accessCode = document.getElementById("code")
const enterCode = document.getElementById("enter-code")
const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", function(){
    // if (enterCode.value === accessCode) {
    //     window.location.href = '/app.html';
    // }
    alert("clicked")
})


function enterApp() {
    
    accessCode.innerHTML =  Math.floor(Math.random() * 900000)

        

}

enterApp()

