import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/FootNav'
import styles from './App.module.css';

function App() {
	const screenConfig = useState(0);

  return (
	<div className={styles.container}>
		<NavBar />
		<InfoPanel currentScreen={screenConfig[0]}/>
		<FootNav screenConfig={screenConfig}/>
	</div>
  );
}

export default App;
