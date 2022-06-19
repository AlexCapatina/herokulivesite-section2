"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const business_1 = require("../Controllers/business");
router.get('/business', Util_1.AuthGuard, business_1.DisplayBusinessContacts);
exports.default = router;
//# sourceMappingURL=business.js.map