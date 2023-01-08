const path = require('path')

console.log(path.sep)

// create normolized path by joining it:
const filePath = path.join('./content/', 'subfolder', 'test.txt')

console.log(filePath)

// shows base to file with file name
const base = path.basename(filePath)

console.log(base)

// path resolve returns absolute path to folder or file

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
