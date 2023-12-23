const express = require("express");
const app = express();
const PORT = 5000;

app.use((req, _, next) => {
  console.log(`${req.method}: ${req.url} request received`);

  return next();
});

function customHTTPHeaderAuth(req, res, next) {
  const userType = req.headers["x-custom-user-type"];
  if (userType === "admin") {
    next();
  } else {
    res.status(403).send("Pristup zabranjen.");
  }
}

app.get("/custom-http-header-spoofing", customHTTPHeaderAuth, (_, res) => {
  res.send("Uspesno si pristupio zasticenoj ruti!");
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}!`);
});
