import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
import photo from "../../assets/restaurant.jpg"
import axios from 'axios';
const Card = ({ data ,setReload,reload,setEditObj,setModal}) => {
  // console.log("card",data);
  const handleDelete =async (id)=>{
    console.log("id",id);
      try {
        const data = await axios.delete(`http://192.168.41.170:5001/hotels/delete/${id}`);
        setReload(!reload)
      } catch (error) {
        console.log("error1", error);
      }
    
  }
  const handleEdit = (hotel)=>{
    console.log("hotel",hotel);
    setEditObj(hotel);
    setModal(true)
  }
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={photo} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.content}>{data.location}</Text>
        
          <View style={styles.roomType}>
            <Text style={{fontSize:12,marginLeft:3}}>Room Type:</Text>
          {
            data.roomTypes.map((room,idx)=>{
              return <Text style={styles.content} key={idx}>{room}</Text>
            })
          }
          </View>
        
        <Text style={styles.content}>Rating: {data.rating}</Text>
        <View style={styles.icons}>
          <Ionicons name='archive' size={25}  onPress={()=> handleDelete(data._id)}/>
          <Ionicons name='pencil'  size={25} onPress={()=> handleEdit(data)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    overflow: 'hidden',
    width:350,
    
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    margin:3,
    
  },
  roomType:{
    display:"flex",
    flexDirection:"row",
    flexWrap : "wrap",
    justifyContent:"flex-start",
    alignItems:"center",
    columnGap:5,
  },
  icons:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    columnGap:25,
    padding:10
  }
});

export default Card;
