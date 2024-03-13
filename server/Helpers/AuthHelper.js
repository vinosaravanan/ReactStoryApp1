const bcrypt = require("bcrypt");

const hashpassword = async (password) => {
  try {
    const saltRounts = 10;
    const hashpassword = await bcrypt.hash(password, saltRounts);
    return hashpassword;
  } catch (error) {
    console.log(error);
  }
};

const comparepassword = async (password, hashpassword) => {
  return bcrypt.compare(password, hashpassword);
};

module.exports = {
  hashpassword,
  comparepassword,
};
