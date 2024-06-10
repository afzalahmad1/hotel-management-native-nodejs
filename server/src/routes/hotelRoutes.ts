
import express from "express"
const router = express();

import {addHotel,getAllHotels,deleteHotel,updateHotel}  from "../controllers/hotelContrillers"

router.post("/add", addHotel);
router.get("/getAll", getAllHotels);
router.delete("/delete/:id", deleteHotel);
router.put("/update", updateHotel);

export default router;