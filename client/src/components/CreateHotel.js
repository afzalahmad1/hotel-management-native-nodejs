import React from "react";
import { View, Modal, StyleSheet, Button, Text, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

const CreateHotel = ({ AddModal, newHotel, setAddModal, setNewHotel,setReload,reload }) => {
  const handleCreate = async () => {
    // console.log("create", newHotel);

    try {
      if (!newHotel.name || !newHotel.location || !newHotel.rating) {
        if (!newHotel.name) {
          alert("Please Enter Name");
          return;
        } else if (!newHotel.location) {
          alert("Please Enter Location");
          return;
        } else {
          alert("Please Enter Rating");
          return;
        }
      }
      const data = await axios.post(
        `http://192.168.41.170:5001/hotels/add`,
        newHotel
      );
      setReload(!reload);
      setNewHotel({
        name: "",
        location: "",
        rating: null,
        roomTypes: ["Deluxe rooms", "Precidential suite", "Connecting Rooms"],
      });
      setAddModal(false);
    } catch (error) {
      console.log("error1", error);
    }
  };
  return (
    <Modal
      //   transparent={true}
      visible={AddModal}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.close}>
          <Ionicons name="close" size={25} onPress={() => setAddModal(false)} />
        </View>
        <View style={styles.inputs}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            value={newHotel.name}
            onChangeText={(text) => setNewHotel({ ...newHotel, name: text })}
          />
        </View>
        <View style={styles.inputs}>
          <Text>Location</Text>
          <TextInput
            style={styles.input}
            value={newHotel.location}
            onChangeText={(text) =>
              setNewHotel({ ...newHotel, location: text })
            }
          />
        </View>
        <View style={styles.inputs}>
          <Text>Rating</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            value={newHotel.rating}
            onChangeText={(text) => setNewHotel({ ...newHotel, rating: text })}
          />
        </View>
        <View style={{ marginTop: 10, paddingTop: 10, paddingBottom: 20 }}>
          <Button title="Create" onPress={handleCreate} />
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

export default CreateHotel;
