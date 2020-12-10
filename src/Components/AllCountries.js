import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import styles from './countries.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    title: {
        textAlign: 'left'
    },
    table: {
        height: 450,
        overflowY: 'scroll',
        display: 'block'
    }
}));

export default function AllCountries() {
    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https:corona.lmao.ninja/v2/countries")
            let data = await response.json();
            setGlobalData(Object.values(Object.values(data)))
            console.log(Object.values(Object.values(data)));
        }
        getData();
    }, [])

    const classes = useStyles();
    return (
        <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Countries Data</Typography>
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr className={classes.title}>
                              <th>Countrires  </th>
                              <th>Cases</th>
                              <th>Recovered</th>
                              <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {globalData.map((key, ind) => {
                        return (
                            <tr key={ind}>
                                <th className={classes.title}>
                                    {globalData[ind].country}
                                </th>
                                <td>
                                <NumberFormat value={globalData[ind].cases} displayType={'text'} thousandSeparator={true}/>
                                </td>
                                <td>
                                <NumberFormat value={globalData[ind].recovered} displayType={'text'} thousandSeparator={true}/>
                                </td>
                                <td>
                                <NumberFormat value={globalData[ind].deaths} displayType={'text'} thousandSeparator={true} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
        </div>
    );
}

