const log = {
  info: function (info) {
    console.log('Info: ' + info)
  },
  warning: function (warning) {
    console.log('Warning: ' + warning)
  },
  error: function (err) {
    console.log('Error: ' + err)
  }
}

module.exports = log
