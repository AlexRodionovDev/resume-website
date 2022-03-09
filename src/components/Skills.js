import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Container, Typography, List, ListItemText, ListItem, ListItemIcon} from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import profileFoto from '../images/profile.jpg'
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'left',
        backgroundColor: '#f5f5f5',
        paddingTop: '3rem',
        justifyContent: 'center'
    },
    gridContAboutMe: {
        marginTop: '3rem',
        borderBottom: 'solid 0.1rem grey'
    },
    titleSkills: {
        fontSize: '1.8rem' ,
        fontWeight: '900',
        paddingLeft: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem'
        },
    },
    gridContSkill: {
        marginTop: '1rem',
        borderBottom: 'solid 1px grey',
    },
    iconNameSkill: {
        marginLeft: '1rem',
    },
    nameSkill: {
        fontSize: '1.2rem' ,
        fontWeight: '900',
        paddingLeft: '1.5rem',
    },
    listItem: {
        padding: 0,

    },
    nameJob: {
        textAlign: 'center',
        fontWeight: 900
    },
    p: {
        textIndent: '2rem'
    },
    date: {
        fontWeight: 900
    },
    job: {
        paddingBottom: '1.5rem'
    }
}));

export const Skills = (props) => {
    const classes = useStyles();
    console.log(props)
    return(
        <Container className={classes.container} fixed>
            <Grid container className={classes.gridContAboutMe}>
                <Grid item>
                    <PersonPinIcon color="primary" style={{ fontSize: 50 }}/>
                </Grid>
                <Grid item >
                    <Typography component="h3" className={classes.titleSkills} color="primary">
                        НАВЫКИ
                    </Typography>
                </Grid>
            </Grid>

            <Box>
                {/* НАВЫКИ ПРОГРАММИРОВАНИЯ */}
                <Grid container className={classes.gridContSkill}>
                    <Grid item xs={1}>
                        <LaptopWindowsIcon color="primary" className={classes.iconNameSkill} style={{ fontSize: 30 }}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography component="h4" className={classes.nameSkill} color="primary">
                            Навыки программирования
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3}>

                </Grid>
                    <Grid item xs={12} md={9}>
                        <List component="ul">
                            {props.devSkills.map((item, i) => (
                                <ListItem key={i} className={classes.listItem}>
                                    <ListItemIcon>
                                        <FiberManualRecordSharpIcon style={{ fontSize: 18 }}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                {/* ОБРАЗОВАНИЕ */}
                <Grid container className={classes.gridContSkill}>
                    <Grid item xs={1}>
                        <CastForEducationIcon color="primary" className={classes.iconNameSkill} style={{ fontSize: 30 }}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography component="h4" className={classes.nameSkill} color="primary">
                            Oбразование
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={3}>
                    <Typography className={classes.date}>
                        {props.education.period}
                    </Typography>   
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography className={classes.p}>{props.education.education}</Typography>
                        <Typography className={classes.p}>
                            {props.education.placeOfStudy}
                        </Typography>
                    </Grid>
                </Grid>

                {/* ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ */}
                <Grid container className={classes.gridContSkill}>
                    <Grid item xs={1}>
                        <CastForEducationIcon color="primary" className={classes.iconNameSkill} style={{ fontSize: 30 }}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography component="h4" className={classes.nameSkill} color="primary">
                            Дополнительное образование
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Typography className={classes.date}>
                            {props.addEducation.period}
                        </Typography>   
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography component="p" className={classes.p}>
                            {props.addEducation.placeOfStudy}
                        </Typography>
                        <List component="ul">
                            {props.addEducation.courses.map((item, i) => (
                                <ListItem key={i} className={classes.listItem}>
                                    <ListItemIcon>
                                        <FiberManualRecordSharpIcon style={{ fontSize: 18 }}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>   
                    </Grid>
                </Grid>

                {/* ОПЫТ РАБОТЫ */}
                <Grid container className={classes.gridContSkill}>
                    <Grid item xs={1}>
                        <WorkOutlineIcon color="primary" className={classes.iconNameSkill} style={{ fontSize: 30 }}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography component="h4" className={classes.nameSkill} color="primary">
                            Опыт работы
                        </Typography>
                    </Grid>
                </Grid>

                {props.job.map((item, i) => (
                    <Grid container key={i} className={classes.job}>
                        <Grid item xs={12} md={3}>
                            <Typography className={classes.date}>
                                {item.period}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography component='h4' className={classes.nameJob}>
                                {item.placeOfWork}
                            </Typography>
                            <Typography className={classes.p}>
                                {item.responsibilities}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Container>
    )
}