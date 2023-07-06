const mongoose = require('mongoose');

// Kết nối tới MongoDB
async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Example', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Kết nối thành công')
  } catch (error) {
    console.log('Kết nối thất bại', error)
  }
}

module.exports = { connect }