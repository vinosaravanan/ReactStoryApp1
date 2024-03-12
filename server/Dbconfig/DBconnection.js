const mongoosh = require('mongoose');
const colors = require('colors');


const dbConnection =  async () => {
   try {
      const connect = await mongoosh.connect()


   } catch (error) {
      console.log(`Error in mongodb ${error}`, colors.bgRed.white);
   }
}


module.exports = dbConnection