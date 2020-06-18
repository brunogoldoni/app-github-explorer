import React from "react";

import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FcFF",
    flex: 1,
    justifyContent: "center",
  },
  wellcome: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wellcome}>Wellcome to React Native</Text>
    </View>
  );
};

export default App;
