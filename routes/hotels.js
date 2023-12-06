import  express from "express";
import Hotel from "../models/Hotel.js";
import { cretaeHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


//create
router.post("/",verifyAdmin,  cretaeHotel());

//update
router.put("/:id",verifyAdmin,updateHotel());

//delete
router.delete("/:id",verifyAdmin,deleteHotel());

//GET
router.get("/:id",getHotel());

//GETALL
router.get("/",getHotels());



export default router 