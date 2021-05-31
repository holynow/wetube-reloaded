import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
    console.log("PATH", req.path);
    next();
}
const methodLogger = (req, res, next) => {
    console.log("METHOD", req.method)
    console.dir(req.protocol === 'http')
    next();
}

const home = (req, res) => res.send("Welcome to my Home");
const login = (req, res) => res.send("you login");

app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`✌ Server listening on port http://localhost:${PORT} ☕`)

app.listen(PORT, handleListening)

