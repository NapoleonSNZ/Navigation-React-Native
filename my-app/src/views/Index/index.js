import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


export default function Index({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index</Text>

      <Button
        title="Configuración"
        onPress={() =>
          navigation.navigate("Settings", {
            nombre: "Alumno de DS39A",
            codigo: 10,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "cyan",
  },
});
