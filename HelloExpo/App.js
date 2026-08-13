import { StatusBar } from 'expo-status-bar';
import { Alert, Text, View } from 'react-native';
import { styles } from './Styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {


  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.textoHello}>Hello, Expo!</Text>
      <Text style={styles.teste}>Mateus Latorre</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#78b3b8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#00ff11',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });