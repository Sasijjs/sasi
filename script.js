var arr = [12,13,14,15,16];
var result = [];
function odd(arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
          result.push(arr[i])
        }
    }
    return result;
}
console.log(odd(arr));
