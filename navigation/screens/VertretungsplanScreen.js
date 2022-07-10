import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function VertretungsplanScreen({ navigation }) {
  let tableHead = ["Klasse", "Stunde", "Vertretung", "Raum", "Info"];
  let tableData = [
    ["0", "0", "0", "0", "0"],
    ["a", "b", "c", "d", "e"],
  ];
  let day = "Montag";

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Pressable style={styles.button}>
          <ImageBackground source={require(".../assets/arrow_left.png")} />
        </Pressable>
        <View style={styles.tag}>
          <Text>{day}</Text>
        </View>
        <Pressable style={styles.button}></Pressable>
      </View>
      <View style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  button: {
    //flex: 1,
    width: 50,
    backgroundColor: "blue",
  },
  tag: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
  },
});
