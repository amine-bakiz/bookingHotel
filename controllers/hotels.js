import Hotel from "../models/Hotel.js";


export const cretaeHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body);
    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }catch(err){
        next(err);
    }
}

export const updateHotel = async (req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.param.id, { $set: req.body},{new:true});
        res.status(200).json(updateHotel);
    }catch(err){
        next(err);
    }
}

export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.param.id );
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        next(err);
    }
}

export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.param.id);
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
}

export const getHotels = async (req,res,next)=>{
    const failed = true;
    if (failed) return next(createError(401,"you are not authenticated!!"));
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
}