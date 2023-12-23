const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 5000;

const SECRET_KEY = "SECRET";

app.use((req, _, next) => {
  console.log(`${req.method}: ${req.url} request received`);

  return next();
});

app.use(express.json());

const users = [
  {
    role: "admin",
    username: "admin",
    password: "123",
    dashboard: "Moj tajni dashboard: ...",
  },
  {
    role: "user",
    username: "napadac",
    password: "123",
  },
];

function authenticateJWTToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(403).send("U zahtevu ne postoji token za autentikaciju.");

  try {
    const decodedToken = jwt.decode(token);
    req.user = decodedToken;
  } catch (err) {
    return res.status(401).send("Nevazeci token.");
  }

  next();
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.json({ token: jwt.sign({ role: user.role }, SECRET_KEY) });
  } else {
    res.status(403).send("Pristup zabranjen.");
  }
});

app.get("/dashboard", authenticateJWTToken, (req, res) => {
  if (req.user && req.user.role === "admin") {
    const dashboard = users.find((user) => user.username === "admin").dashboard;
    res.send(dashboard);
  } else {
    res.status(403).send("Zahtev odbijen.");
  }
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}!`);
});
