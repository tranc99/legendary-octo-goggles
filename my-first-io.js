'use strict'
const fs = require('fs')

const fileBuffer = fs.readFileSync(process.argv[2])
const str = fileBuffer.toString()
const arr = str.split('\n')
const num = arr.length - 1
console.log(num)
