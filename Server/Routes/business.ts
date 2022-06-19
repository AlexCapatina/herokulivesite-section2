import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBusinessContacts } from '../Controllers/business';

router.get('/business', AuthGuard, DisplayBusinessContacts);

export default router;