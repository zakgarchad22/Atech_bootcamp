

function isEven(number)
{

if(number%2 === 0)
{
    return true
}
else
{
    return false
}

}






function odds(arr)
{
    for (let i in arr){
        if (isEven(i) == true)
        {
            console.log(i)
        }


    }



}
arr = [1,2,3,4,5,6,7,8]
odds(arr)