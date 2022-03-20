const router = require("express").Router();
import { con } from "../server";
import { register, login } from "./userControls";

//router.post("/register", register).post("/login", login);

export default router;
