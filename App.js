import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style= {styles.screens}>

      </View>
      <View style={styles.buttonContainer}>
        <Button title='Home' color="tomato" style={styles.buttons}/>
        <Button title='News' color="tomato" style={styles.buttons}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "fff",
    justifyContent: 'space-evenly',
    flexDirection: "row",
    alignItems: 'center'
  },
  buttons: {
    flex: 1,
  },
  screens: {
    flex: 10,
    backgroundColor: "dodgerblue",
  }
});
