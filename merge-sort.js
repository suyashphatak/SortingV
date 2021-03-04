document.getElementById("mergeSort").addEventListener("click", async function(){

   let arr = document.querySelectorAll(".barStyle");  
   var start = 0; 
   var end = arr.length;
   mergeSort(arr,start,end);

});

async function mergeSort(arr,start,end)
{
   if (start < end)
   {
      var mid = start + (end - start) / 2;
      mergeSort(arr, start, mid);
      mergeSort(arr, mid + 1, end);
      merge(arr, start, mid + 1, end);

   }
}

function merge(arr,start,mid,end)
{
   // var temp = end - start + 1;
   let duplicateArray = [];

    var i = start;
    var j = mid;
    var k = 0;

    while (i < mid && j <= end)
    {
        var x = arr[i].style.height;
        x = parseInt(x);
        var y = arr[j].style.height;
        y = parseInt(y); 

        if (x < y)
        {
            duplicateArray[k] = arr[i];
            i++;
        }
        else
        {
            duplicateArray[k] = arr[j];
            j++;
        }
        k++;
    }

    while (i < mid)
    {
        duplicateArray[k] = arr[i];
        i++;
        k++;
    }
    while (j <= end)
    {
        duplicateArray[k] = arr[j];
        j++;
        k++;
    }

    k = 0;
    for (var p = start; p <= end; p++)
    {
        const style1 = window.getComputedStyle(duplicat eArray[k]);
     
        const transform1 = style1.getPropertyValue("height");

        arr[p].style.height = transform1;

        arr[p] =  duplicateArray[k];

        k++;

    }

}