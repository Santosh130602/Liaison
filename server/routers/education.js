const express = require("express")
const router = express.Router()
// const { auth, isInstructor } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
//   getEnrolledCourses,
//   instructorDashboard,
} = require("../controllers/education")
// const { isDemo } = require("../middleware/demo");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile",deleteAccount)
router.put("/updateProfile", updateProfile)
router.get("/getUserDetails", getAllUserDetails)
// Get Enrolled Courses
// router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", updateDisplayPicture)
//get instructor dashboard details
// router.get("/getInstructorDashboardDetails",auth,isInstructor, instructorDashboard)

module.exports = router;