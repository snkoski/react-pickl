import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import classes from './AntNav.module.css';


const NavItems = (props) => {
    let [selected, setSelected] = useState('5')

    const handleSelect = (e) => {
        console.log("TARGET", e)
        setSelected(e.key)
    }
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selected]}
            style={{ lineHeight: '64px' }}
            onClick={handleSelect}
        >
            <Menu.Item className={classes.Pickl} key="5"><Link to='/'>Pickl</Link></Menu.Item>
            { props.isAuthenticated 
                ? <Menu.Item className={classes.Right} key="3"><Link to='/logout'>Logout</Link></Menu.Item>
                : <Menu.Item className={classes.Right} key="2"><Link to='/register'>Register</Link></Menu.Item> 
            }
            { props.isAuthenticated 
                ? (selected !== '4') ? <Menu.Item className={classes.Right} key="4"><Link to='/user'>User Profile</Link></Menu.Item> : <Menu.Item className={classes.Right} key="6"><Link to='/'>Games</Link></Menu.Item>
                : <Menu.Item className={classes.Right} key="1"><Link to='/login'>Login</Link></Menu.Item>
            }
        </Menu>
    )
}
export default NavItems;

