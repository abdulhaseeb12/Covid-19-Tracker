import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import PlaceIcon from '@material-ui/icons/Place';
import SquareFootIcon from '@material-ui/icons/SquareFoot';

const useStyles = makeStyles({
  root: {
      position: 'absolute',
      bottom: 470,
      right: 0,
      left: 0
  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
          console.log(newValue)
          screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction variant="contained"  label="Global Stats" icon={<LanguageSharpIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<PlaceIcon />} />
      <BottomNavigationAction color="primary" label="Graphs" icon={<SquareFootIcon />} />
    </BottomNavigation>
  );
}