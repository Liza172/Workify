import express from "express"
import {registerCompany, getCompany, getCompanyById, updateCompany} from "../controllers/company.controller.js"
const router = express.Router();
import isAuthenticated from "../middlewares/isAuthenticated.js"
import {singleUpload} from "../middlewares/multer.js"

router.route("/register").post(isAuthenticated ,registerCompany);
router.route("/get").get(isAuthenticated ,getCompany);
router.route("/get/:id").get(isAuthenticated ,getCompanyById);
router.route("/update/:id").post(isAuthenticated, singleUpload ,updateCompany);
export default router;

