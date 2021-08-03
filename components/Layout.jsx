import Head from 'next/head';
import React from 'react';
import {AppBar,Toolbar,Typography,Container } from '@material-ui/core';
import useStyles  from '../utils/styles';

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
      <div>
        <Head>
          <title>Amazon</title>
        </Head>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography>Amazon</Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>

        <footer className={classes.footer}>
          <Typography>All right reserved. Next amazon</Typography>
        </footer>
      </div>
    );
};

export default Layout;