import express from "express"
const router = express.Router();
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { addToWishlist, getAdminJobs, getAllJobs, getJobById, getJobfromWishlist, postJob, removeFromWishlist } from "../controllers/job.controller.js";


router.route("/post").post(isAuthenticated ,postJob);
router.route("/get").get(isAuthenticated ,getAllJobs);
router.route("/get/:id").get(isAuthenticated ,getJobById);
router.route("/getadminjobs").get(isAuthenticated ,getAdminJobs);
router.route("/getfromwishlist").get(isAuthenticated, getJobfromWishlist);
router.route("/addtowishlist/:id").get(isAuthenticated, addToWishlist);
router.route("/removefromwishlist/:id").get(isAuthenticated, removeFromWishlist);


export default router;

