document.getElementById("insertionSort").addEventListener("click", async function() {

  $(':button').prop('disabled', true); 

  let arr = document.querySelectorAll(".barStyle");  
   
  for (let i = 1; i < arr.length; i++) 
   {
    let value = parseInt(arr[i].style.height);
    let hole = i;
      while (hole > 0 && parseInt(arr[hole - 1].style.height) > value ) 
      {
         let left = parseInt(arr[hole-1].style.height);

         arr[hole].style.background = "#a80038";
         arr[hole-1].style.background = "#a80038";

         await resolveAfterSeconds();
         swap(arr[hole],arr[hole-1]);

         arr[hole].style.background = "#1DB954";
         arr[hole-1].style.background = "#1DB954";

         arr[hole].style.height = left;
         hole--; 
      }
      arr[hole].style.height = value;
      arr[hole].style.background  = "#1DB954";
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
