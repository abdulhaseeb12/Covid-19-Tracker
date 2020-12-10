import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import styles from './countries.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase'
    }
}));

export default function GlobalStats() {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://disease.sh/v3/covid-19/all");
            let data = await response.json();
            setGlobalData(data);
            console.log('my data',data)
        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={styles.container}>
        <Typography gutterBottom variant="h4"component="h2">Global Data</Typography>
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globalData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3 className={classes.title}>
                                        {key.replace(/_/g,' ')}
                                    </h3>
                                    <h3><NumberFormat value={globalData[key]} displayType={'text'} thousandSeparator={true}/></h3>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
        </div>
    );
}
