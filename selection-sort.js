document.getElementById("selectionSort").addEventListener("click", async function() {

   $(':button').prop('disabled', true); 

   let arr = document.querySelectorAll(".barStyle");  

   for (let i = 0; i < arr.length; i++) 
   {
     
      for (let j = i+1; j < arr.length; j++) 
      {
         var x = arr[i].style.height;
         x = parseInt(x);
         var y = arr[j].style.height;
         y = parseInt(y);  
         
         arr[i].style.background="#a80038";
         arr[j].style.background="#a80038";
         await resolveAfterSeconds();

         if( x > y)
         {
            swap(arr[i],arr[j]);
         }

         arr[i].style.background="#fbfbfb";
         arr[j].style.background="#fbfbfb";
      }
      arr[i].style.background = "#1DB954";
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
