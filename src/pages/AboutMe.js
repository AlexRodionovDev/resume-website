import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Container, Typography, Avatar, Link} from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Layout from '../components/Layout';


const useStyles = makeStyles((theme) => ({
    container: {
       textAlign: 'center',
       backgroundColor: '#f5f5f5',
       paddingTop: '3rem',
       justifyContent: 'center'
    },
    name: {
        fontSize: '1.9rem'
    },
    gridContainer: {
        marginTop: '2rem'
    },
    avatar: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: '15rem',
        height: '15rem',
        margin: '0 auto'
    },
    gridContAboutMe: {
        marginTop: '3rem',
        borderBottom: 'solid 0.1rem grey',
    },
    personPinIcon: {
        
    },
    titleAboutMe: {
        fontSize: '1.8rem' ,
        fontWeight: '900',
        paddingLeft: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem'
          },
    },
    contentAboutMe: {
        textAlign: 'left',
        textIndent: '2rem',
        padding: '1.5rem 0 1.5rem 0',
    },
    gridContent: {
        textAlign: 'left',
    },
    gridContentBox: {
        [theme.breakpoints.down('sm')]: {
            width:'21rem',
            margin: '0 auto',    
          },
    },
    gridContContacts: {
        borderBottom: 'solid 2px grey'
    },
    nameContacts: {
        fontSize: '1.8rem',
        fontWeight: '900',
    },
    contactsIcon: {
        margin: '0 0.5rem -0.4rem 0'
    },
    purpose: {
        marginTop: "2rem"
    }
  }));

export const AboutMe = (props) => {
    const classes = useStyles();
    return(
        <Layout>
            <Container className={classes.container} fixed>
                <Grid container className={classes.gridContAboutMe}>
                    <Grid item>
                        <PersonPinIcon className={classes.personPinIcon} color="primary" style={{ fontSize: 50 }}/>
                    </Grid>
                    <Grid item >
                        <Typography component="h1" className={classes.titleAboutMe} color="primary">
                            ОБО МНЕ
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={5} className={classes.gridContainer}>
                    <Grid item xs={12} md={6} className={classes.gridAvatar}>
                        <Avatar className={classes.avatar} src="/images/profile.jpg"/>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.gridContent}>
                        <Box className={classes.gridContentBox}>
                            <Typography className={classes.name} component="h4" color="primary">
                                {props.contactsData.name}
                            </Typography>
                            <Typography component="p">
                                <PersonPinCircleIcon  className={classes.contactsIcon} color="primary" style={{ fontSize: 25 }}/>
                                {props.contactsData.city}
                            </Typography>
                            <Typography component="p">
                                <PhoneIcon  className={classes.contactsIcon} color="primary" style={{ fontSize: 25 }}/>
                                {props.contactsData.phone}
                            </Typography>
                            <Typography component="p">
                                <MailOutlineIcon className={classes.contactsIcon}  color="primary" style={{ fontSize: 25 }}/>
                                E-mail: {props.contactsData.e_mail}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Typography className={classes.purpose}>
                        Цель: {props.purpose}
                    </Typography>
                    <Typography className={classes.contentAboutMe}>
                        {props.aboutMe.first}
                    </Typography>
                    <Typography className={classes.contentAboutMe}>
                        {props.aboutMe.second}<Link href={props.aboutMe.third} target='_blank'>, вот он.</Link>
                    </Typography>
                </Box>
            </Container>
        </Layout>
    )
}