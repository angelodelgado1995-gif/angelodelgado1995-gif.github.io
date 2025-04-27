let IsOpen = true;
let androidIsOpen = true;

function hamburgerIcon(){
    let navBar = document.getElementById('nav')
    let pcWebsiteScreenBar = document.getElementById('pcWebsiteScreen')
    let androidWebstieScreenBar = document.getElementsByClassName('androidWebsiteScreen')
    
    if(IsOpen == true){
        navBar.style.display = 'none' 
        pcWebsiteScreenBar.style.marginLeft = '-145px'
        IsOpen = false;

    }

    else{
        navBar.style.display = 'block'
        pcWebsiteScreenBar.style.marginLeft = '23px'
        IsOpen = true;
    
    }    
   
}   