"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choiceSchema = void 0;
const mongoose = require("mongoose");
exports.choiceSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    suffix: {
        type: String,
        trim: true,
        default: ''
    },
    attribute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attribute',
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=choice.schema.js.map