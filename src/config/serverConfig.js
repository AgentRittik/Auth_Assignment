const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config(); // call our dotenv file
console.log(process.env.PORT);
module.exports = {
    PORT : process.env.PORT,
    SALT: bcrypt.genSaltSync(10),
    JWT_KEY: process.env.JWT_KEY
}  