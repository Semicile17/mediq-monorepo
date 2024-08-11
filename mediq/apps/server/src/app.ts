import express from "express";
import morgan from "morgan";
import postRouter from "./routes/postRoute"
import userRouter from "./routes/userRoute"

export const app  = express();

//MIDDLEWARES

console.log('NODE ENVIRONMENT :',process.env.NODE_ENV);

if(process.env.NODE_ENV === 'development'){
    console.log('Morgan is being used'); 
    app.use(morgan("dev"));
}

app.use(morgan("dev"));
app.use(express.json());

//ROUTES

app.use('/api/v1/posts',postRouter);
app.use('/api/v1/users',userRouter);






app.all('*', (req,res)=>{
    res.send("<h1>Page Not Found</h1>")
})


