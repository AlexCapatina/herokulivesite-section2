import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayRegisterPage, ProcessLofoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage } from "../Controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);

/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process register page. */
router.post('/register', ProcessRegisterPage);

/* Process logout page. */
router.get('/logout', ProcessLofoutPage);

export default router;