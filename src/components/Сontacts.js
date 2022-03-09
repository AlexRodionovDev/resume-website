import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Container, Typography, Avatar, Link} from '@material-ui/core';
import profileFoto from '../images/profile.jpg';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';


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
    avatar: {
        height:'12rem',
        width:'12rem',
        margin: '0 auto'
    },
    gridContainer: {
        marginTop: '2rem'
    },
    gridAvatar: {
        paddind: '4rem',
        marginBottom: '2rem',
    },
    gridContent: {
        textAlign: 'left',
        marginBottom: '2rem',
    },
    gridContentBox: {
        [theme.breakpoints.down('sm')]: {
            width:'21rem',
            margin: '0 auto',
        },
    },
    gridContContacts: {
        marginTop: '3rem',
        borderBottom: 'solid 0.1rem grey'
    },
    titleContacts: {
        fontSize: '1.8rem',
        fontWeight: '900',
        paddingLeft: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem'
          },
    },
    contactItem: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
          },
    },
    contactsIcon: {
        margin: '0 0.5rem -0.4rem 0'
    },
}));

export const Contacts = (props) => {
    console.log(props.contactsData)
    const classes = useStyles();    
    return(
        <Container className={classes.container} fixed>
            <Grid container className={classes.gridContContacts}>
                <Grid item>
                    <PersonPinIcon color="primary" style={{ fontSize: 50 }}/>
                </Grid>
                <Grid item >
                    <Typography component="h1" className={classes.titleContacts} color="primary">
                        КОНТАКТЫ
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} className={classes.gridContainer}>
                <Grid item xs={12} md={6} className={classes.gridAvatar}>
                    <Avatar className={classes.avatar} src={profileFoto} alt="my foto" />
                </Grid>
                <Grid item xs={12} md={6} className={classes.gridContent}>
                    <Box className={classes.gridContentBox}>
                        <Typography className={classes.name} component="h4" color="primary">
                            {props.contactsData.name}
                        </Typography>
                        <Typography component="p" className={classes.contactItem}>
                            <PersonPinCircleIcon  className={classes.contactsIcon} color="primary" style={{ fontSize: 25 }}/>
                            {props.contactsData.city}
                        </Typography>
                        <Typography component="p" className={classes.contactItem}>
                            <PhoneIcon  className={classes.contactsIcon} color="primary" style={{ fontSize: 25 }}/>
                            {props.contactsData.phone}
                        </Typography>
                        <Typography component="p" className={classes.contactItem}>
                            <MailOutlineIcon className={classes.contactsIcon}  color="primary" style={{ fontSize: 25 }}/>
                            E-mail: {props.contactsData.e_mail}
                        </Typography>
                        <Typography component="p" className={classes.contactItem}>
                            <GitHubIcon className={classes.contactsIcon}  color="primary" style={{ fontSize: 25 }}/>
                            <Link href={props.contactsData.gitHub} target='_blank'>{props.contactsData.gitHub}</Link>
                        </Typography>
                        <Typography component="p" className={classes.contactItem}>
                            <FacebookIcon className={classes.contactsIcon}  color="primary" style={{ fontSize: 25 }}/>
                            <Link href={props.contactsData.facebook} target='_blank'>{props.contactsData.facebook}</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4703.715931340607!2d27.436653!3d53.880953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdaef1adf8a1f%3A0x303f9764f77f3290!2z0YPQu9C40YbQsCDQqNCw0YDQsNC90LPQvtCy0LjRh9CwIDU3LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1646811277862!5m2!1sru!2sby" style={{width:"100%", height:"20rem", border:0,  allowfullscreen:"", loading:"lazy" }}  ></iframe>
        </Container>
    )
}