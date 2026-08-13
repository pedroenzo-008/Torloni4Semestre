import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./Styles";
import { Header } from "./header/Header";
import { FormTask } from "./formTask/FormTask";
import { TaskList } from "./tasklist/TaskList";
import { TaskProvider } from "../context/TaskProvider";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
      <SafeAreaView style={Styles.safeArea}>
        <View style={Styles.container}>
        <Header />
        <FormTask />
        <TaskList />
        </View>
      </SafeAreaView>
      </TaskProvider>
    </SafeAreaProvider>
  );
}


export default App;
