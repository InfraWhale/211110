const arr =[4,3,21,43,77,22,11,45]

arr.sort()

console.log(arr) //[ 11, 21, 22,  3, 4, 43, 45, 77]

arr.sort((a,b) => a-b) // 2개씩 비교해서 계속 순서 맞춤
//array.sort에 정렬 로직 넣어주면 얘가 알아서 정렬해주는 개념 기억할것!

console.log(arr)
