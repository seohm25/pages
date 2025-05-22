console.log("test"); 


// find and name your button
const toggleButton = document.querySelector("#mode-toggle")   

// listen for a user clicking on the button
toggleButton.addEventListener("click",function(){  

// Find the :root selector and toggle the dark class
document.querySelector(";root").classList.toggle("dark");
});

