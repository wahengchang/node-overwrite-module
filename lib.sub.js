const lib = require('./lib')

const printInfo = (msg) => {
    return lib.print('[Info]' + msg)
}

module.exports = {printInfo}