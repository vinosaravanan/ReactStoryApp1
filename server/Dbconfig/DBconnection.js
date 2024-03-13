const mongoosh = require('mongoose');
const colors = require('colors');


const dbConnection =  async () => {
   try {
      const connect = await mongoosh.connect(process.env.MONGODB_URL);
      console.log(
         `Connected to Mongodb DataBase ${connect.connection.host}`.bgMagenta.white
      );
       
   } catch (error) {
      console.log(`Error in mongodb ${error}`.bgRed.white);
   }
}


module.exports = dbConnection