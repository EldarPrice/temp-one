const { readFile, writeFile } = require('fs')

// create async file reading and writing

// this is path to file |  encoding|       |----|---- error and result async
//                      V          V       V    V
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  const first = res
  readFile('./content/second.txt', 'utf-8', (err, res) => {
    if (err) {
      console.log(err)
      return
    }
    const second = res
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})

console.log('starting the new one')