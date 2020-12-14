import React from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';
import Chart from './Chart';

export default function InfoPanel({currentScreen}) {

    if(currentScreen === 0)
        return <GlobalStats />
    else if(currentScreen === 1)
        return <AllCountries />
    else if(currentScreen === 2)
        return <Chart />
    
    else return <GlobalStats />
}