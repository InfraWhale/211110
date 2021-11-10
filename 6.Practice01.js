const Movie = [
    {action: 12, kiss: 2, category: 'A'},
    {action: 2, kiss: 14, category: 'M'},
    {action: 7, kiss: 2, category: 'A'},
    {action: 2, kiss: 10, category: 'M'},
    {action: 6, kiss: 15, category: 'M'},
]

const targetMovie = {action: 7, kiss:7, category:'' }

Movie.sort((a,b ) => {
    const distanceA = Math.sqrt( Math.pow( a.action - targetMovie.action,2) + Math.pow( a.kiss - targetMovie.kiss,2))
    const distanceB = Math.sqrt( Math.pow( b.action - targetMovie.action,2) + Math.pow( b.kiss - targetMovie.kiss,2))
    return distanceA - distanceB

})
while (Movie.length>3) {
    Movie.pop()
}

console.log(Movie)

count = 0
for (let i = 0; i < Movie.length; i++) {
    if(Movie[i].category === 'A') {
        count++
    } else {
        count--
    }
}

if(count>0) {
    console.log('타겟 영화는 액션영화입니다.')
} else {
    console.log('타겟 영화는 멜로영화입니다.')
}