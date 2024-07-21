/// BACK EN
import express from "express"
import mongoose from "mongoose"
import { User } from "./models/User";

const app = express();
app.use(express.json());


// Assignment for by lovly nmotuuu(baby)
// mongoose connect 
// postman request testing


// register user 
// email and password 
app.post('/register', async (req, res) => {

    // {
    //     email: "Omauteae",
    //     password: "adasda"
    // }
    // Body Data 
    const {email, password} = req.body;
    try {
        
        // User la register karaicha

        // 1. chekc karaicha email already exists karato ka nnahi 
        //      true => res user already exist
        //      false => regsitration
        
        if(!email || !password){
            res.status(400).json({
                success: false,
                message:"enter all the detials"
            })
        }

        const isFound = await UserModel.findOne({email}); // is already there 
        if(!isFound){
            const newUser = new User({email, password})
            await newUser.save(); // nahi zhala
            res.status(201).json({
                success:true,
                message:"registered Successfully"
            })
            
        }else{
            res.status(401).json({
                success:false,
                message:"user already exists please login"
            })
        }

    } catch (error) {
        // he error throew kar
        console.log("Error while registering user", error);
        res.status(500).json({
            success: false,
            message: "failed to register"
        })
    }

})







// login user
app.post("/login", async (req,res)=>{
    // controller
    const {email, password} = req.body;
    try {
        
        // use finf karaicha 
        const foundUser = await User.findOne({email});

        if(!foundUser){
            res.status(404).json({
                success: false,
                message:"user does not exist"
            })
        }else{
            const foundUserPassword = foundUser.password;
            if(foundUserPassword === password){
                // success 
                res.status(200).json({
                    success:true,
                    message:"logged in successfully"
                })
            }else{
                res.status(400).json({
                    success:"false",
                    message:"Incorrect Password"
                })
            }
        }


    } catch (error) {
        console.log("Invalid email or password", error);
        res.status(500).json({
            success: false,
            message: "failed to register"
        })
    }
})

// email passowrd 

// ADD EMPLOYEEE 
// Name, age, address(city), role (intern), salary,gender M F



// UPDATE EMPLOYYEEINFORMATION


app.listen(3003, () => {
    console.log("running");
})