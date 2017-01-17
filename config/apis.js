const env = process.env.NODE_ENV || 'development';

const apis_by_environment = {
  development : {
    playven : 'http://localhost:3000/api',
    assets : 'http://localhost:3000'
  },
  test : {
    playven : 'http://localhost:3000/api'
  },
  production : {
    playven : 'https://rc.playven.com/api',
    assets : 'https://rc.playven.com'
  }
}

module.exports = apis_by_environment[env];
