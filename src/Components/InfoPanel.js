import React from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';
import LineGraph from './LineGraph';

export default function InfoPanel({currentScreen}) {

    if(currentScreen === 0)
        return <GlobalStats />
    else if(currentScreen === 1)
        return <AllCountries />
    else if(currentScreen === 2)
        return <LineGraph />
    
    else return <GlobalStats />
}