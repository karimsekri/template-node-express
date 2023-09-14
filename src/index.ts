import express from "express";
import dotenv from "dotenv/config";
import cors from 'cors';

const app = express();
app.use(cors());

const myport = process.env.PORT ? parseInt(process.env.PORT as string) : 3030;

app.get("/hello", async (_, res) => {        
    res.send("Hello");   
});

app.listen( myport, () =>
  console.log(`Server is listening on port ${myport}`)
);