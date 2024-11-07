import User from "../models/model.user.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req,res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password,10); //already using await, 10 is salt no.

    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();

        res.status(201).json('User Created successfully');
        
    } catch (error) {
        next(error);
    }
};