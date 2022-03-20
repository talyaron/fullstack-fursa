const router = require("express").Router();
import { con } from "../server";
import { register, login, addCat, getCatUnder2 } from "./userControls";

router.post("/register", register).post("/login", login);

router.post("/add-cat", addCat).get("/get-cat-2", getCatUnder2)
export default router;
