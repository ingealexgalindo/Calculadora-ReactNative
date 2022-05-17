import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/AppTheme';
import CalculadoraScreen from './src/components/screen/CalculadoraScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.back}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'}></StatusBar>
      <CalculadoraScreen></CalculadoraScreen>

    </SafeAreaView>
  )
}

export default App;
