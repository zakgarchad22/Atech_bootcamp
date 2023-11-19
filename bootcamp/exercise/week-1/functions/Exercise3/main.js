


function check(arr,number)
{
    for (let i in arr){
        if (i == number)
        {
            return true
        }


    }
    return false



}
arr = [1,2,3,4,5,6,7,8]
console.log(check(arr , 2))