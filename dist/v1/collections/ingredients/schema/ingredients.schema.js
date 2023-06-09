"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientSchema = void 0;
const mongoose = require("mongoose");
var IngredientUnit;
(function (IngredientUnit) {
    IngredientUnit["gram"] = "g";
    IngredientUnit["milligram"] = "mg";
})(IngredientUnit || (IngredientUnit = {}));
exports.ingredientSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    dailyValue: {
        setDailyValue: {
            type: Boolean,
            default: true
        },
        dailyValueAmount: {
            type: Number,
            default: 0
        },
        dailyValueUnit: {
            type: String,
            enum: Object.values(IngredientUnit),
            default: IngredientUnit.gram,
        },
        dailyValueEstablished: {
            type: Boolean,
            default: false
        }
    },
    description: {
        type: String,
        default: ''
    },
    showDescription: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    isSubIngredient: {
        type: Boolean,
        default: false
    },
    subIngredients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient',
        }],
}, { timestamps: true });
//# sourceMappingURL=ingredients.schema.js.map