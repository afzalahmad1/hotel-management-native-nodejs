import express, {Express, Request, Response} from "express"
import  Hotel  from "../model/HotelModel";

const addHotel = async (req: Request, res: Response) => {
  const hotelBody: any = req.body;
  // console.log(hotelBody);
  try {
    if (
      !hotelBody.name ||
      !hotelBody.location ||
      !hotelBody.rating ||
      !hotelBody.roomTypes
    ) {
      res.send({
        message: "All fields are mandatory",
      });
      return;
    }
    const newHotel = new Hotel({
      name: hotelBody.name,
      location: hotelBody.location,
      rating: hotelBody.rating,
      roomTypes: hotelBody.roomTypes,
    });
  
    await newHotel.save();
  
    res.send({
      status: 201,
      message: "Hotel has been created!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllHotels = async (req: Request,res: Response)=>{
    try {
        const allHotels = await Hotel.find({})
        res.send(allHotels)
    } catch (error) {
        res.send(error)
    }
}
const deleteHotel = async(req:Request,res:Response)=>{
  try {
    const id: any = req.params.id;
    console.log(id);
    await Hotel.findByIdAndDelete({_id:id})
    res.send({message:"Hotel is deleted"})
  } catch (error) {
    console.log(error);
    res.send({message:"server error",
  error:error})
  }
}
const updateHotel =  async (req: Request, res: Response) => {
    try {
      const hotelBody: any = req.body;
      console.log(hotelBody);
      await Hotel.findByIdAndUpdate(hotelBody._id, {
        name: hotelBody.name,
        location: hotelBody.location,
        rating: hotelBody.rating,
        roomTypes: hotelBody.roomTypes,

      });
  
      res.status(200).send({message:"Hotel succesfully updated!"});
    } catch (e) {
      res.status(500).send({message:"Internal server error"});
    }
  };
export {addHotel,getAllHotels,deleteHotel,updateHotel};
