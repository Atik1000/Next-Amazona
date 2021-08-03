import Head from 'next/head';
import React from 'react';
import {AppBar,Toolbar,Typography,Container } from '@material-ui/core';


const Layout = ({ children }) => {
    return (
      <div>
        <Head>
          <title>Amazon</title>
        </Head>
        <AppBar position="static">
          <Toolbar>
            <Typography>Amazon</Typography>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>

        <footer>
          <Typography variant="caption"   >
            All right reserved. Next amazon
          </Typography>
        </footer>
      </div>
    );
};

export default Layout;