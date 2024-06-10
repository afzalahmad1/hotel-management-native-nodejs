
import { useEffect, useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import Card from "./src/components/Card";
import Header from "./src/components/Header";
import EditForm from "./src/components/EditForm";
import CreateHotel from "./src/components/CreateHotel";

export default function App() {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState({
    name:"",
    location:"",
    rating:null,
    roomTypes: ["Deluxe rooms","Precidential suite","Connecting Rooms"]
  });
  const [reload, setReload] = useState(true);
  const [editObj, setEditObj] = useState({});
  const [modal, setModal] = useState(false);
  const [AddModal, setAddModal] = useState(false);

  useEffect(() => {
    fetchAllHotels();
  }, [reload]);
  const fetchAllHotels = async () => {
    // console.log("hiiii");
    try {
      const res = await fetch(`http://192.168.41.170:5001/hotels/getAll`);
      const data = await res.json();
      // console.log("data", data);
      setHotels(data);
    } catch (error) {
      console.log("error1", error);
    }
  };
  return (
    <ScrollView>
      <StatusBar />
      <Header setAddModal={setAddModal}/>
      <EditForm
        modal={modal}
        editObj={editObj}
        setModal={setModal}
        setEditObj={setEditObj}
        setReload={setReload}
        reload={reload}
      />
      <CreateHotel
        AddModal={AddModal}
        setAddModal={setAddModal}
        newHotel={newHotel}
        setNewHotel={setNewHotel}
        setReload={setReload}
        reload={reload}
      />

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {hotels.length > 0 ? (
          hotels.map((data) => {
            return (
              <Card
                data={data}
                key={data._id}
                reload={reload}
                setReload={setReload}
                setEditObj={setEditObj}
                setModal={setModal}
              />
            );
          })
        ) : (
          <Text>Loading....</Text>
        )}
      </View>
    </ScrollView>
  );
}
