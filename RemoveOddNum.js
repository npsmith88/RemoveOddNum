// JavaScript file that removes odd numbers from an array without looping through it
function RemoveOddNum(){
    var n = [1,2,3,4,5,6,7,8,9,10,100,112,113];
    n.reduce(function (array, num) {
        if (num % 1 == 0) array.push(num);
        return array;
    })
    console.log(n);
}