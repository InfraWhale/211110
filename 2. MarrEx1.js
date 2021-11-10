// const arr = [[1,2], [3,4]] //2차원 배열, 배열 안의 배열

//2021년도 분기별 매출
const arr = [
    [90, 87, 140],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]

// 가장 매출이 좋았던 분기는?
// 각 분기별로 매출 평균 만들기

const Parr = []

for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    console.log(tempArr)

    let sum = 0

    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
    }
    const tempAvg = (sum/tempArr.length).toFixed(2)
    console.log(tempAvg)
    Parr.push(parseFloat(tempAvg))
}
console.log(Parr) // [ '105.67', '133.33', '206.67', '170.00' ] 문자열이 되어버림 -> toFixed 때문, 위에 parseFloat 추가
// 그중에서 최대 평균 찾기

// 가장 매출이 좋았던 달은?
let max = 0
let period

for (let i = 0; i < Parr.length; i++) {

    if(Parr[i] > max){
        max = Parr[i]
        period = i
    }

}
console.log("max: " + max)
console.log("period : " + (period + 1) + "분기입니다." )

// 최고