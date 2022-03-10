import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Link} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    backgroundColor: '#e6e6e6',
    textAlign: 'center',
    position: 'fixed',
    top:0
  },
  toolbar: {
    margin: "0 auto"
  },
  button: {
    color: "red",
    margin: '0.5rem',
    cursor: 'pointer',
    "&:hover":{
      color: 'blue',
    }
  },
  link: {
    textDecoration: 'none',
    "&:hover":{
      color: 'blue',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '17px'
    },
  },
  bottomNavigation: {
    backgroundColor: '#e6e6e6',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  }
}));

export default function Layout({ children}) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
      <Toolbar variant="regular" className={classes.toolbar}>
        <Typography className={classes.button} variant="h6" color="inherit">
          <Link component={RouterLink} className={classes.link} to = '/'>Обо мне</Link>
        </Typography>
        <Typography className={classes.button} variant="h6" color="primary">
          <Link component={RouterLink} className={classes.link} to = '/skills'>Навыки</Link>
        </Typography>
        <Typography className={classes.button} variant="h6" color="primary">
          <Link component={RouterLink} className={classes.link} to = '/contacts'>Контакты</Link>
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      {children}
    </main>
    <BottomNavigation
      showLabels
      className={classes.bottomNavigation}
    >
      <BottomNavigationAction href='https://www.facebook.com/rybiroid' target='_blank' label="facebook" icon={<FacebookIcon className={classes.contactsIcon}  color="primary" style={{ fontSize: '1.6rem' }}/>} />
      <BottomNavigationAction href='https://vk.com/id6299473' target='_blank' label="ВКонтакте" icon={<img className={classes.contactsIcon} src='/images/vk.svg' style={{ width: '1.6rem' }}/>} />
      <BottomNavigationAction href='https://www.instagram.com/alex.rodionov.dev/' target='_blank' label="instagram" icon={<InstagramIcon className={classes.contactsIcon}  color="primary" style={{ fontSize: '1.6rem' }}/>}/>
    </BottomNavigation>
    </>
  )
}