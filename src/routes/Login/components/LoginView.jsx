/***********************

 *        DEMO         *

***********************/
// PoC

import React from 'react'
import Auth from 'j-toker'
import Navigation from '../../../components/Navigation'
import './LoginView.scss'

let user = {}
let logged_in = false;


const login = (e) => {
  e.preventDefault()
  Auth.emailSignIn({
      email: user.email,
      password: user.password
    }).then(function(res) {
      logged_in = true
      console.log('logged_in')
    }).fail((res) => console.log(res.data.errors));
}

const logout = (e) => {
  e.preventDefault()
  Auth.signOut().then(function(resp) {
    logged_in = false
    console.log('logged_out')
    });
}

const onLoginSuccess = (user) => {
  logged_in = true;
  console.log(user)
}


Auth.configure({
  apiUrl: 'https://rc.playven.com/api',
  authProviderPaths: {
    facebook: '/auth/facebook'
  }
}).then(function(user) {
  self.onLoginSuccess(user);
});

class Login extends React.Component {


  render () {

    return (
      <div>

        <header className="b-header b-header_mainpage">
          <Navigation theme={'light'} />
        </header>

        <main className='b-page'>
          <section className='page-section'>

            <div className='container'>
              <div className='row'>
                <div className='col-xs-16 col-lg-offset-1 col-lg-14 col-xl-offset-3 col-xl-10'>
    {
            logged_in ?
            <h1> hello logged in ! {user.email} </h1>
            :
            <form>
              login
              <input onChange={(e) => { user.email = e.target.value } } type="text" />
              <input onChange={(e) => { user.password = e.target.value } }type="password"/>
              <input onClick={login} type="submit" />
              <input onClick={logout} type="submit" value="logout" />
            </form>
          }

                </div>
              </div>
            </div>


          </section>
        </main>

      </div>
    )
  }
}

export default Login
