//js
//a)
function primeArray(arrayLeng) {
    arr = []
    let i = 1
    while (arr.length < arrayLeng) {
        i++
        if (primeArr(i)) {
            arr.push(i)
        }
    }
    return arr
}

function primeArr(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n > 1 && n % i === 0) {
            return
        }
    }
    return n
}

//b
function textFilter(text) {
    let num = []
    text.split(' ').filter(currentItem => {
        if (currentItem == +currentItem) {
            num.push(currentItem)
        }
    })
    return num
}

//c
function replacement(text) {
    const result = []
    let numb = 1
    text.split('').map((item, index, arr) => {
        if (item == arr[index + 1]) {
            numb += 1
        } else {
            numb > 1 ? result.push(item + numb) : result.push(item)
            numb = 1
        }
    })
    return result.join('')
}

//d
const exampleArr = [{a:{b:[{c:4},{c:5}],}}]

exampleObj = { a:{b:{c:5}}}

function get(example, keys) {
    let normalKeys = keys.split('.')
    while(normalKeys.length > 0) {
        let key = normalKeys.shift()
        example = example[key]
    }
    return example
} 
// console.log(get(exampleArr, '0.a.b.1.c'))
// console.log(get(exampleObj,'a.b'))

// e

let randomerResult = []
function tryRandomer() {
    let r = randomer()
    if (randomerResult.includes(r)) {
        throw new Error
    }

    try{
        randomerResult.push(r)
    } catch(e){
        return tryRandomer()
    }
    return randomerResult
}

function randomer(){
    let rand = Math.random() * (100 + 1)
    return Math.floor(rand)
}
console.log(tryRandomer(), tryRandomer())















