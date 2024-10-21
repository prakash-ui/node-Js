const { log } = require('console')
const os = require('os')

//info about user 

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()}`)
console.log(`The System version is ${os.version()}`)


const currentOS= {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
log(currentOS)


