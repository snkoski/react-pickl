import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { removeUser } from '../../actions/user';
import { removeVotes } from '../../actions/vote';
import classes from './AntNav.module.css';
import NavItems from './NavItems';

const { Header } = Layout;
const antNav = (props) => {
  return (
    <Header className={classes.AntNav}>
      <div className="logo" />
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        {this.renderLoginLogout()}
        {this.renderRegister()}
        <NavItems />
      </Menu> */}
      <NavItems isAuthenticated={props.auth}/>
    </Header>
  )
}

export default antNav;

// class AntNav extends Component {

//     // handleLogout = () => {
//     //     this.props.removeUser()
//     //     this.props.removeVotes()
//     // }

//     // renderLoginLogout = () => {
//     //     if (this.props.auth.userId) {
//     //         return <Menu.Item onClick={this.handleLogout} key="3">Logout</Menu.Item>
//     //     } else {
//     //         return (
//     //                 <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
//     //                 )
//     //     }
//     // }

//     // renderRegister = () => {
//     //     return (this.props.auth.userId) ? null : <Menu.Item key="2"><Link to='/register'>Register</Link></Menu.Item>
//     // }

//    render () {
//        console.log("ANTNAV", this.props)
//         return (
//           <Header className={classes.AntNav}>
//             <div className="logo" />
//             {/* <Menu
//               theme="dark"
//               mode="horizontal"
//               defaultSelectedKeys={['1']}
//               style={{ lineHeight: '64px' }}
//             >
//               {this.renderLoginLogout()}
//               {this.renderRegister()}
//               <NavItems />
//             </Menu> */}
//                           <NavItems auth={this.props.auth}/>
//           </Header>
//         )
//    }
// }

// // const mapStateToProps = state => {
// //     return {
// //         user: state.user,
// //         votes: state.votes
// //     }
// // }

// export default connect(null, { removeUser, removeVotes })(AntNav);