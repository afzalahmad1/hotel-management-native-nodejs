import React from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

const EditForm = ({
  modal,
  editObj,
  setModal,
  setEditObj,
  setReload,
  reload,
}) => {
//   console.log("edit", editObj);
  const handleSubmit = async () => {
    console.log("editabbb", editObj.rating);
    try {
      const data = await axios.put(
        `http://192.168.41.170:5001/hotels/update`,
        editObj
      );
      setReload(!reload);
      setEditObj({
        name: "",
        location: "",
        rating: null,
        roomTypes: ["Deluxe rooms", "Precidential suite", "Connecting Rooms"],
      });
      setModal(false);
    } catch (error) {
      console.log("error1", error);
    }
  };
  return (
    <Modal
      //   transparent={true}
      visible={modal}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.close}>
          <Ionicons name="close" size={25} onPress={() => setModal(false)} />
        </View>
        <View style={styles.inputs}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            value={editObj.name}
            onChangeText={(text) => setEditObj({ ...editObj, name: text })}
          />
        </View>
        <View style={styles.inputs}>
          <Text>Location</Text>
          <TextInput
            style={styles.input}
            value={editObj.location}
            onChangeText={(text) => setEditObj({ ...editObj, location: text })}
          />
        </View>
        <View style={styles.inputs}>
          <Text>Rating</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            value={editObj.rating}
            onChangeText={(text) => setEditObj({ ...editObj, rating:text })}
          />
        </View>
        <View style={{ marginTop: 10, paddingTop: 10, paddingBottom: 20 }}>
          <Button title="Update" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    margin: 30,
    marginTop: 180,
    padding: 20,
    backgroundColor: "#ddd",
  },
  close: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    color: "black",
    padding: 10,
    borderRadius: 5,
  },
  inputs: {
    display: "flex",
    rowGap: 4,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EditForm;
