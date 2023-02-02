 function restart(){
    window.location.reload();
}

 function getSubmit(){
    let numberValue = document.getElementById("number").value;
        for( let i = 1; i <= numberValue; ++i) {
             let button = document.createElement('button')
             button.className = "button"
             button.id =  i
             button.value = "You clicked the wrong button!"
             button.addEventListener('click', () => {
             document.getElementById("format").innerHTML = document.getElementById(i).value;
             })

            document.body.appendChild(button)
         }
    let randomNumber = Math.floor(Math.random() * numberValue) +1;
    document.getElementById(randomNumber).value = "You clicked the right button!";
    document.getElementById("number").value = "";
 }
