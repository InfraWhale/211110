// const arr = ['AA',"BB", "CCC","DDD"]
//
// console.log(arr["0"])
//
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// 평균 구하기

const arr = [54,22,14,64,95,85]

let sum =0

for (let i = 0; i < arr.length; i++) {
    sum = sum+ arr[i]
    console.log('Sum : ' + sum)
}

let avg = (sum / arr.length).toFixed(3)

console.log('AVG : ' + avg )

// 최저
let min = 101

for (let i = 0; i < arr.length ; i++) {
    const score = arr[i]
    // 만일 score가  min보다 작으면 swap
    if(score < min){
        min = score
    }
}

console.log(`MIN : ${min}`)

// 최고
let max = -1

for (let i = 0; i < arr.length ; i++) {
    const score = arr[i]
    // 만일 score가  max보다 크면 swap
    if(score > max){
        max = score
    }
}

console.log(`MAX : ${max}`)