module.exports = {
     mutipleMongooseToObject: function(mongoose) {
        if (mongoose && Array.isArray(mongoose)) {
          return mongoose.map(item => item.toObject());
        }
        return [];
      },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}