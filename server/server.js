import express from 'express';
import mongoose, { Schema, model, mongo } from 'mongoose';
const app = express();
import cors from 'cors'

app.get('/', (req, res)=>{
    res.write("<h1>Hello</h1>")
})

app.use(express.json());
app.use(cors());
const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const userModel = new model('user', userSchema);


app.post('/register', async(req, res)=>{
    try {
        const {email, password} = req.body;

        const newUser = new userModel({email, password});


        newUser.save();

        console.log("user added");
        res.send({newUser});
    } catch (error) {
        console.log(error)
        res.send(error);
    }
})

app.post('/login', async(req, res)=>{
    try {

        const {email, password} = await req.body;
        console.log(email, password)

        const user = await userModel.findOne({email});

        if(!user){
            console.log("no user found")
            return res.send('no user found');
        }

        console.log('login successfull')
        res.send(user);

        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})






const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://iompawar:ompawar12@cluster0.lk2o0yo.mongodb.net/')
        console.log('db connected');
    }
    catch(err){
        console.log(err);
    }
}

connectDB();

app.listen(5000, ()=>{
    console.log("app listening");
})


