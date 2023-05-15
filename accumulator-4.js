let arr = [
    'Беслан',
    'Мансур',
    'Хамзат',
    'Яхья',
    'Джамалайл',
    'Адам',
    'Ислам',
    'Муслим',
    'Беса',
    'Ахьмад',
]

let accumulator = []

let i = 0
while(i < arr.length){
    if(arr[i][0].includes('А')){
        accumulator.push(arr[i])
    }
    i++
}

console.log(accumulator)