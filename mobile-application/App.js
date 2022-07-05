import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground} from 'react-native';
import MainScreen from './src/screens/mainScreen';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View >
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
