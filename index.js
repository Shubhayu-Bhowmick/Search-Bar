document.getElementById("inputName").addEventListener("keyup", function(event){
    let currentname = event.target.value.toLowerCase();
    let names = document.getElementsByClassName("movie");
    for(let i = 0; i<names.length; i++)
    {
         let name = names[i].textContent.toLowerCase();
        
         if(name.includes(currentname)){
             names[i].style.display = "block";
         }
         else{
             names[i].style.display = "none";
         }
    }

})