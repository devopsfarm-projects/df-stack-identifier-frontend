import { Router } from "express";
import { authorizationUser, reposListData, userInfoData , reposContentData , logoutUser } from "../controllers/user.controller.js";
import { verifyAccessToken } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/authorization").get(authorizationUser);

//Secured Routes
router.route("/userInformation").get(userInfoData);
router.route("/reposList").get(reposListData);
router.route("/reposContent").get(reposContentData);
router.route("/logout").post(logoutUser);

// http://localhost:8000/api/v1/users/reposContent


export default router