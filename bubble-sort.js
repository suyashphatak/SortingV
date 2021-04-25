document.getElementById("bubbleSort").addEventListener("click", async function() {

   $(':button').prop('disabled', true); 

   let arr = document.querySelectorAll(".barStyle");     
   for(let i=0; i< arr.length; i++)
   {
      for(let j=0; j<arr.length-i-1; j++)
      {
         var x = arr[j].style.height;
         x = parseInt(x);
         var y = arr[j+1].style.height;
         y = parseInt(y);  

         arr[j].style.background="#a80038";
         arr[j+1].style.background="#a80038";
         await resolveAfterSeconds();
         

         arr[j].style.background="#fbfbfb";
         arr[j+1].style.background="#fbfbfb";
          
         if(x > y)
         {
            swap(arr[j],arr[j+1]);  
         }
      }
      arr[arr.length-i-1].style.background = "#1DB954";
   }
   $(':button').prop('disabled', false); 

});

function swap(el1,el2)
{
   const style1 = window.getComputedStyle(el1);
   const style2 = window.getComputedStyle(el2);

   const transform1 = style1.getPropertyValue("height");
   const transform2 = style2.getPropertyValue("height");

   el1.style.height = transform2;
   el2.style.height = transform1;

}

function resolveAfterSeconds() {
   var slider = document.getElementById("range").value;

   return new Promise(resolve => {
     setTimeout(() => {
      resolve('resolved');
     }, slider);
   });
 }

