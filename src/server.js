import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>i still love you</h1>");
}

const handleLogin = (req, res) => {
    return res.send({ message: "Login here."})
}

app.get("/", handleHome);
app.get("/login", handleLogin)
app.get("/babo", (req, res) => {return res.send('babo')})

const handleListening = () => console.log(`✌ Server listening on port http://localhost:${PORT} ☕`)

app.listen(PORT, handleListening)

