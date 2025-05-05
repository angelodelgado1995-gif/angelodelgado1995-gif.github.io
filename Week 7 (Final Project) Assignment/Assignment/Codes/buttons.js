function openButton() {
    document.getElementById("ourMesaJrHighSidebar").style.width = "300px";

}

function closeButton() {
    document.getElementById("ourMesaJrHighSidebar").style.width = "0px";
   
}



const newTodaysDateTexture = new Date();


function todaysDateOpenButton() {
    document.getElementById("ourTodaysDateSidebar").style.height = "260px";
    document.getElementById("todaysDateTexture").innerHTML = newTodaysDateTexture;

}

function todaysDateCloseButton() {
    document.getElementById("ourTodaysDateSidebar").style.height = "0px";

}