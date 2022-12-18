let text1 = 'I am 35. I live in Brest, Belarus. I develop and manage websites for 1 years.'
let text2 = 'Im an adventure lover taking my good old Land Cruiser to off-road trails'
let text3 = 'Im a Marvel fan and a father of 2 awesome kids!'

let content = document.getElementById('content');
let about = document.getElementById('about');
let hobby = document.getElementById('hobby');

for (let i in [...text1]) {
    let letter = document.createElement('span')
    letter.textContent = [...text1][i]
    if (letter.textContent.match(/\s/)) {
        letter.style.margin = 'auto 3px'
    }
    letter.style.animationDelay = i / 100 + 's'
    content.appendChild(letter)

}

setTimeout(() => {
    for (let i in [...text2]) {
        let letter = document.createElement('span')
        letter.textContent = [...text2][i]
        if (letter.textContent.match(/\s/)) {
            letter.style.margin = 'auto 3px'
        }
        letter.style.animationDelay = i / 100 + 's'
        about.appendChild(letter)

    }
}, 2000)

setTimeout(() => {
    for (let i in [...text3]) {
        let letter = document.createElement('span')
        letter.textContent = [...text3][i]
        if (letter.textContent.match(/\s/)) {
            letter.style.margin = 'auto 3px'
        }
        letter.style.animationDelay = i / 100 + 's'
        hobby.appendChild(letter)


    }
}, 4000)

