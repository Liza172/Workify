import express from "express"
import {login, register, updateProfile, logout} from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();
import { singleUpload } from "../middlewares/multer.js";

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile);
router.route("/logout").get(logout);
export default router;

