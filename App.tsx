/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import CountriesList from './src/components/countriesList/CountriesList';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <CountriesList />;
}

export default App;
