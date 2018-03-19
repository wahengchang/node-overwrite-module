const lib = require('./lib')
const subLib = require('./lib.sub')

const _p = lib.print
delete lib['print']
lib['print'] = function(msg) {
  return _p('[Note]' + msg)
}

subLib.printInfo('i am msg')