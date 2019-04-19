import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
     logOut(e) {
         e.preventDefault()
         localStorage.removeItem('token')
         this.props.history.push('/')
     }

     render() {
         const loginRegLInk = (
             <ul>
                 <li>
                     <Link to='/login'>Login</Link>
                 </li>
                 <li>
                     <Link to='/register'>Register</Link>
                 </li>
             </ul>
         )

         const userLink = (
             <ul>
                 <li>
                     <Link to='/profile'>User</Link>
                 </li>
                 <a onClick={this.logOut.bind(this)}>LogOut</a>
             </ul>
         )
         return (
             <div>
                 <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                 </ul>
             </div>
         )
     }
}

export default withRouter(Navbar)