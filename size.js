var slider = document.getElementById("size");
var bars = [];
slider.oninput = function(){
    $(':button').prop('disabled', false); 
    document.getElementById("board").innerHTML="";
       
    var divwidth = document.getElementById("board").offsetWidth;
    var barwidth = divwidth / slider.value;
    
    for (let i = 0; i < slider.value; i++) {

        bars[i] = Math.floor(Math.random() * 101);
  
        var temp = document.createElement("div");
        temp.classList.add("barStyle");

        temp.style.height = bars[i]*5+"px";
        temp.style.width = barwidth+"px";

        document.getElementById("board").appendChild(temp);
        
     }

  
}