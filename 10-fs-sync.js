const { readFileSync, writeFileSync } = require('fs')

console.log('start')
// read files
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// write files (if file doesn't exist Node creates that file and puts value inside)
// {flag: 'a'} = appends to existing file

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag:  'a'},
  console.log('writing files')
)
console.log('Done with the task')
console.log('Starting with next one')