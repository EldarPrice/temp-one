//Global - NO WINDOW !!!

// __dirname  - path to current directory
// __filename -file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
//process     - info about env wher the program is being executed

let num = 1

setInterval(() => {
    console.log(`the number is: ${num++}`)
}, 1000)

require('./07-mind-granade') + `${num}`