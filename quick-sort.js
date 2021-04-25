document.getElementById("quickSort").addEventListener("click", function(){
  
  $(':button').prop('disabled', true); 
  let arr = document.querySelectorAll(".barStyle");  
  quickSort(arr,0,arr.length-1);

});

async function partition ( arr,  low,  high) 
{ 
    var pivot = arr[high];
    var i = (low - 1); 
   
    var y = arr[high].style.height; 
    y = parseInt(y);

    for (var j = low; j <= high - 1; j++) 
    { 
      var x = arr[j].style.height;
      x = parseInt(x);

      if (x <= y) 
      { 
        i++; 
        arr[i].style.background="#a80038";
        arr[j].style.background="#a80038";

        swap(arr[i], arr[j]); 
        await resolveAfterSeconds();

        arr[i].style.background="#fbfbfb";
        arr[j].style.background="#fbfbfb";

      }      
    } 
    arr[high].style.background="#fbfbfb";
    swap(arr[i + 1], arr[high]); 
    arr[i+1].style.background="#1DB954";
    return (i + 1); 
} 

async function quickSort(arr, low, high) 
{ 
  if (low >  high)  
  {
    $(':button').prop('disabled', false); 
    return;
  }

  if(low == high)
  {
    arr[low].style.background = "#1DB954";
    return;
  }
   
  var pi = await partition(arr, low, high); 
  await quickSort(arr, low, pi - 1); 
  await quickSort(arr, pi + 1, high); 

} 

function resolveAfterSeconds() {
   var slider = document.getElementById("range").value;

   return new Promise(resolve => {
     setTimeout(() => {
      resolve('resolved');
     }, slider);
   });
 }
 function swap(el1,el2)
{
   const style1 = window.getComputedStyle(el1);
   const style2 = window.getComputedStyle(el2);

   const transform1 = style1.getPropertyValue("height");
   const transform2 = style2.getPropertyValue("height");

   el1.style.height = transform2;
   el2.style.height = transform1;

}


