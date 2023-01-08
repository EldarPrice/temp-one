// access module in variable
const os = require('os')

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds

//converting system uptime to hours minutes and seconds
setInterval(() => {
  const uptime = os.uptime() //convert 100 to 60
  let hours = uptime
  let minutes = (hours % 1) * 10
  let seconds = Math.round((minutes % 1) * 60)

  //   console.log(hours)
  console.log(hours)
  //   console.log(
  //     `The current Uptime is: ${Math.floor(hours)}:${Math.floor(minutes)}:${seconds}`
  //   )
}, 1000)


