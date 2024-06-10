import mongoose, { Schema, Document } from 'mongoose';

interface IHotel extends Document {
  name: String;
  location: String;
  rating: Number;
  roomtypes: RoomType[]; 
}

interface RoomType{
    type:string;
    price:number;
    availability:boolean
}

const HotelScheema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  roomTypes: { type: Object, required: true },
  
});

const Hotel = mongoose.model('Hotels', HotelScheema);
export default Hotel;