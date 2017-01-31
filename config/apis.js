const env = process.env.NODE_ENV || 'development';

const apis_by_environment = {
  development : {
    mywebsite : 'http://localhost:3000/api',
    assets : 'http://localhost:3000'
  },
  test : {
    mywebsite : 'http://localhost:3000/api'
  },
  production : {
    mywebsite : 'https://rc.mywebsite.com/api',
    assets : 'https://rc.mywebsite.com'
  }
}

module.exports = apis_by_environment[env];
