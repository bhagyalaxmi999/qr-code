let container = document.querySelector(".container");
let qrInput = document.querySelector("#text")
let generateBtn = document.querySelector("#generate")
let img = document.querySelector("#qr-img")

let preInput //if already exist the input

// addeventlistener
generateBtn.onclick = function() {
    let input = qrInput.value.trim()

    if(!input || input === preInput) { //empty or priveous input generate
        // alert(" this already generate ")
        if(!input)
           alert("empty")
           if(input == preInput)
           alert("already generate")
        return//no return
    } 
    else {
        preInput = input;
        generateBtn.innerText = "Generating Qr Code.. " //onclick 1st 
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        img.onload = function() {
            container.classList.add("active") //if img load the container main  classLIST  addthe class "active"
            generateBtn.innerText = " Generate QR Code"//  click is finshed generatr the code came to normal
        }

    }

}