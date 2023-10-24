import { Text, SafeAreaView, StyleSheet,ImageBackground } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Start from './components/Start'
import English from './components/English'
import Exercises from './components/Exercises'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <English/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    
    padding: 8,
  },

});
