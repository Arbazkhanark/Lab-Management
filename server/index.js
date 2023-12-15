const express=require("express");
const dbConnection = require("./database");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors=require("cors")
const app=express();
dbConnection()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
  
app.use(cookieParser())

app.use(require("./routers/userRouter"))
app.use(require("./routers/adminRouter"))
app.use(require("./routers/labRouter"))
app.use(require("./routers/complainRouter"))
app.use(require("./routers/workerRouter"))


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on PORT: ${PORT}`))