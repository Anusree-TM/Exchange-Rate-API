"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const converter_1 = require("./converter");
const router = express_1.default.Router();
router.get('/convert', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { from, to, amount } = req.query;
    try {
        const convertedAmount = yield (0, converter_1.currencyConvert)(String(from), String(to), Number(amount));
        res.json({ result: convertedAmount });
    }
    catch (_a) {
        res.status(500).json({ erroe: "internal Server Error" });
    }
}));
exports.default = router;
