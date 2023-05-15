let arr = [1,2,3,4,5,6,7,8,9,10]

let accumulatorOdd = []

let i = 0
while(i < arr.length){
    if(arr[i] % 2 === 1){
        accumulatorOdd.push(arr[i])
    }
    i++
}
console.log(accumulatorOdd)