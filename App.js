import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
 StyleSheet,
 Text,
 View,
 ImageBackground,
 TextInput,
 TouchableOpacity,
} from "react-native";

export default function App() {
 const [secureMode, setSecureMode] = useState(true);

 const handleSecureMode = () => setSecureMode(!secureMode);

 return (
  <View style={styles.container}>
   <ImageBackground
    style={styles.image}
    source={require("./assets/Intro.webp")}
   >
    <View style={styles.form}>
     <Text style={styles.text}>Email</Text>
     <TextInput style={styles.input} textAlign="center" />
     <Text style={styles.text}>Password</Text>
     <TextInput
      style={styles.input}
      textAlign="center"
      secureTextEntry={secureMode}
     />
     <TouchableOpacity
      style={styles.buttonMode}
      activeOpacity={0.9}
      onPress={handleSecureMode}
     />
     <TouchableOpacity
      style={styles.button}
      activeOpacity={0.9}
      onPress={handleSecureMode}
     >
      <Text style={styles.buttonText}>Sign in</Text>
     </TouchableOpacity>
     <StatusBar style="auto" />
    </View>
   </ImageBackground>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 form: {
  marginTop: 15,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
 },
 text: {
  color: "blue",
  fontSize: 30,
 },
 image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
 },
 input: {
  borderWidth: 1,
  borderColor: "grey",
  borderRadius: 100,
  backgroundColor: "#fff",
  minWidth: 300,
  marginTop: 10,
  padding: 15,
  paddingHorizontal: 30,
  fontSize: 20,
  color: "#000",
 },
 buttonMode: {
  width: 20,
  height: 20,
  backgroundColor: "red",
  position: "absolute",
  top: "57%",
  right: "20%",
 },
 button: {
  backgroundColor: "blue",
  minWidth: 300,
  margin: 20,
  padding: 15,
  paddingHorizontal: 30,
  borderRadius: 100,
 },
 buttonText: {
  color: "#fff",
  fontSize: 20,
  textTransform: "uppercase",
  textAlign: "center",
 },
});
