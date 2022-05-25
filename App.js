import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style= {styles.links}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.links}>
        <Text style={styles.text}>News</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: "20%",
    backgroundColor: "tomato",
    flexDirection: 'column',
    justifyContent: "space-evenly",
    
  },
  links: {
    //flex: 1,
    height: "20%",
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center"
  },
  text: {
    paddingLeft: "10%"
  }
});
