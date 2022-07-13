import { Calendar } from 'react-native-calendars';
import { View, Button, SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';
import React, {useState} from 'react';

export default class Example extends React.Component { 
    
  render() {

    return (
      <View style={{ flex: 1 }}>
        <Button 
          onPress={this.buttonClickListener}
          title="Neues Ereignis hinzufügen"
          color="#00B0FF">

        </Button>
       
        <Calendar
          // Initially visible month. Default = Date()
          //current={'2022-06-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2022-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2030-31-12'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('day selectet', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
         <Text style={styles.loremIpsum}>'13.07.2022'</Text>    
      </View>
      
    );}};



const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
      },
    input: {
        height: 500,
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius:  5
    },
    loremIpsum: {
        color: "rgba(0,0,0,1)",
        fontSize: 60,
        opacity: 0.39
      }
    })    

  
