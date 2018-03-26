const config = {
  production:{
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default:{
    SECRET: 'SUPERSAIYAN_PANtherRevs0424',
    DATABASE: 'mongodb://localhost:27017/koolreviews'
  }
}
exports.get = function get(env){
  return config[env] || config.default
}
