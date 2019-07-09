import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';


const navItems = (props) => {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
        >
            { props.isAuthenticated 
                ? <Menu.Item key="3"><Link to='/logout'>Logout</Link></Menu.Item>
                : <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
            }
            { props.isAuthenticated 
                ? null 
                : <Menu.Item key="2"><Link to='/register'>Register</Link></Menu.Item> 
            }
        </Menu>
    )
}
export default navItems;

