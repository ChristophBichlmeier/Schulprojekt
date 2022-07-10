import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function VertretungsplanScreen({ navigation }) {
  let tableHead = ["Klasse", "Stunde", "Vertretung", "Raum", "Info"];
  let tableData0 = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  let tableData1 = [
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
  ];
  let tableData2 = [
    ["2", "2", "2", "2", "2"],
    ["2", "2", "2", "2", "2"],
  ];

  let allTableData = [tableData0, tableData1, tableData2];
  let tableData = tableData0;
  let day = ["Montag", "Dienstag", "Mittwoch"];
  let indexTabelle = 0;

  function pressLeft() {
    if (indexTabelle > 0) {
      tableData = allTableData[indexTabelle - 1];
      indexTabelle--;
    }
    console.log(indexTabelle);
  }
  function pressRight() {
    if (indexTabelle < 2) {
      tableData = allTableData[indexTabelle + 1];
      indexTabelle++;
    }
    console.log(indexTabelle);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tableContainer}>
        <View style={styles.headers}>
          <Text>{day[0]}</Text>
        </View>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData0} textStyle={styles.text} />
        </Table>
        <View style={styles.headers}>
          <Text>{day[1]}</Text>
        </View>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData1} textStyle={styles.text} />
        </Table>
        <View style={styles.headers}>
          <Text>{day[2]}</Text>
        </View>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData2} textStyle={styles.text} />
        </Table>
      </ScrollView>
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
    flex: 1,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "blue",
  },
  imgage: {
    flex: 0.5,
  },
  tag: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
    //flexDirection: "row",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  headers: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
  },
});

/*<View style={styles.bar}>
        <Pressable style={styles.button} onPress={pressLeft}>
          <Image
            resizeMode="contain"
            source={require("../../assets/arrow_left.png")}
          />
        </Pressable>
        <View style={styles.tag}>
          <Text>{day}</Text>
        </View>
        <Pressable style={styles.button} onPress={pressRight}>
          <Image
            resizeMode="contain"
            source={require("../../assets/arrow_right.png")}
          />
        </Pressable>
      </View>*/
