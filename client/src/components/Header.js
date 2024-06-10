import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import res from "../../assets/logo.jpg";
const Header = ({ setAddModal }) => {
  return (
    <View style={{overflow: "hidden", paddingBottom: 5}}>
      <View style={styles.navbar}>
      <Image source={res} style={styles.image} />
      <Button title="Add New Hotel" onPress={() => setAddModal(true)} />
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
  },
  navbar: {
    position:"fixed",
    top:0,
    width:"100%",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10,
    shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,

    backgroundColor: "#fff"
  },
});

export default Header;
