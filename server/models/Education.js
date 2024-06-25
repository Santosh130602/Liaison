const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
    educationLevel: {
        type: String,
        enum: ['HighSchool', 'Intermediate', 'Graduation', 'PostGraduation'],
        // required: true
    },
    institutionName: {
        type: String,
        // required: true
    },
    boardOrUniversity: {
        type: String,
        // required: true
    },
    yearOfPassing: {
        type: Number,
        // required: true
    },
    state:{
        type: String,
        // required: true
    },
    distic:{
        type: String,
        // required: true
    }
})
module.exports = mongoose.model("Education", educationSchema);




// const mongoose = require("mongoose");

// // Define the Profile schema
// const profileSchema = new mongoose.Schema({
// 	gender: {
// 		type: String,
// 	},
// 	dateOfBirth: {
// 		type: String,
// 	},
// 	about: {
// 		type: String,
// 		trim: true,
// 	},
// 	contactNumber: {
// 		type: Number,
// 		trim: true,
// 	},
// });

// // Export the Profile model
// module.exports = mongoose.model("Profile", profileSchema);