import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView,
  TouchableHighlight,TouchableOpacity,
Button } from 'react-native';

export default function App() {

  return (
    <View
    style={{
      backgroundColor : "#fff",
      flex : 1
    }}
    >
    <View
    style={{
      backgroundColor:"orange",
      flex:0.5
    }}/>
     <View
    style={styles.container}>
      <Image
      alignSelf='center'

      style={styles.imageStyle}
      source={require("./assets/images.png")}/>
    </View>
     <View
    style={{
      backgroundColor:"green",
      flex:0.5
    }}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textStyle:{
    color: "red",
    backgroundColor: "green",
    fontWeight: "bold"
  },
  btnStyle:{
    color:"orange",
    textDecorationColor:"blue",
    fontWeight:"italic",
    justifyContent: 'center',
    alignItems:'left'
  },
  imageStyle:{
    justifyContent:'center',
    alignItems:'center'
  }
});
