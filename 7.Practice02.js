const arr = [
    [{month:1, total:90}, {month:2, total:87}, {month:3, total:140}],
    [{month:4, total:120}, {month:5, total:130}, {month:6, total:150}],
    [{month:7, total:180}, {month:8, total:240}, {month:9, total:200}],
    [{month:10, total:180}, {month:11, total:140}, {month:12, total:190}]
]

const newArr = [
    ...arr[0],
    ...arr[1],
    ...arr[2],
    ...arr[3]
];

console.log(newArr)

newArr.sort((a, b) => {

    return a.total - b.total

})
    while (newArr.length >1) {
        newArr.shift()
    }

console.log(newArr)

console.log('최고매출월 :'+newArr[0].month)
console.log('최고매출액 :'+newArr[0].total)

