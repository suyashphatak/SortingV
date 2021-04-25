var bars = [];
document.getElementById("refresh").addEventListener("click", function() {
   document.getElementById("board").innerHTML="";
   
   for (let i = 0; i < 100; i++) {

      bars[i] = Math.floor(Math.random() * 101);

      var temp = document.createElement("div");
      temp.classList.add("barStyle");
      temp.style.height = bars[i]*5+"px";

      document.getElementById("board").appendChild(temp);
      
   }
});
