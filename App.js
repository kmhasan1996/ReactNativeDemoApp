import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';





export default function App() {
 /*  let [quote, setQuote] = React.useState('')
  let [source, setSource] = React.useState('') */
  let [AllData, setData] = React.useState([])
  
 

  const fetchApiCall = () => {
    /* fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      "method": "GET",
      "headers": {
        'X-RapidAPI-Key': '70bde3f2c0msheedf7c791c7da3bp11e3bcjsnc2f286b49023',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.content);
        setSource(response.originator.name)
        //console.log(response.content);
        //console.log(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      }); */

      const headers = {}
      fetch("http://184.168.127.174:5701/api/MasterProfessionApi", {
      "method": "GET",
      "headers": {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET,PATCH,OPTIONS'
      }
    })
      .then(response => response.json())
      .then(response => {
        setData(response)
        //console.log(response);
       
      })
      .catch(err => {
        console.log(err);
      });
     
  }

  useEffect(() => {
    fetchApiCall();
  }, []);

  const widthArr = [150, 50,100];
  const records: [] = AllData;
    const rows = [];
    records.forEach((item) => {
      rows.push([
        item.professionName,
        item.active,
        item.entryPerson
        
      ])
    })
    

  return (
    <View style={styles.container} >
     
     {/* {
      AllData.map((item)=>(
        <View key={item.professionId}>
         <Text style={styles.quote}>{item.professionName}</Text>
        
       </View>
      ))
     } */}
     <Table
        borderStyle={{ borderColor: 'black' }}
        style={{ borderRadius: 10 }}
        textStyle={{ fontSize: 16 }}
      >
        <Row
          data={["Profession Name","Active","Entry by"]}
          style={{ flexWrap: 'wrap' }}
          textStyle={{fontSize: 16,fontWeight:'bolder'}}
          widthArr={widthArr}
        />
        <Rows
          data={rows}
          style={{ flexWrap: 'wrap' }}
          textStyle={{fontSize: 14}}
          widthArr={widthArr}
        />
      </Table>
    

      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Refresh</Text>
        </View>
      </TouchableHighlight>
      <StatusBar backgroundColor="white" style="hide" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  title:{
    fontSize:35,
    color:'#fff'
  },
  button: {
    padding: 7,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  },
  sourch:{
    textAlign:'right',
    fontWeight:'bold',
    color:'#fff'
  },
  quote:{
    fontStyle:'italic',
    color:'#fff',
    textAlign:'left'
  }
});
