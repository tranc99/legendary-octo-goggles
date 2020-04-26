'use strict'
const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) {
    console.log('There was an error reading the file')
  } else {
    const arr = data.split('\n')
    const num = arr.length - 1
    console.log(num)
  }
})
// const str = fileBuffer.toString()
// const arr = str.split('\n')
// console.log(arr)
// const num = arr.length - 1
// console.log(num)
