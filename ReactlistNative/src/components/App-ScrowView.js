import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, StyleSheet } from "react-native";
import { styles } from "../Styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}
      contentContainerStyle={styles.content}>
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>
            <Text style={styles.text}>Senai</Text>          
            <Text style={styles.text}>Senai</Text>
            <StatusBar style="auto" />    
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  }
});
