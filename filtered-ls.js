const fs = require('fs')
// read the directory contents into a list
let fileList = []

fs.readdir(process.argv[2], function (err, data) {
  if (err) {
    return console.log('Error reading directory')
  }

  fileList = data
  // console.log(`fileList is ${data.toString()}`)

  // create a new list
  let filteredList = []

  const extension = `.${process.argv[3]}`
  // console.log(`Extension is ${extension}`)
  // console.log(`File List is ${fileList.toString()}`)

  // based on filtering each item in the old list for the file extension
  filteredList = fileList.filter(function (item) {
    if (item.indexOf(extension) !== -1) {
      return item
    }
  })

  // console.log(filteredList)
  // finally loop through the new list, creating a console.log for each item
  // in the list
  for (let i = 0; i < filteredList.length; i++) {
    // console.log('The filtered list is...')
    console.log(filteredList[i])
  }
})
