import React from 'react';
import { Layout } from 'antd';
import NavItems from './NavItems';

import classes from './AntNav.module.css';

const { Header } = Layout;
const antNav = (props) => {
  return (
    <Header className={classes.AntNav}>
      <NavItems isAuthenticated={props.auth}/>
    </Header>
  )
}

export default antNav;
