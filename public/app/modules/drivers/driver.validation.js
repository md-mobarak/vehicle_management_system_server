"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverValidationSchema = void 0;
const zod_1 = require("zod");
const createDriver = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        email: zod_1.z
            .string({
            required_error: "Email is required",
        })
            .email({
            message: "Invalid email format",
        }),
        phone: zod_1.z.string({
            required_error: "Phone is required",
        }),
        avatar: zod_1.z.string({
            required_error: "Avatar is required",
        }),
        experience: zod_1.z.string({
            required_error: "Experience is required",
        }),
        join_date: zod_1.z.string({
            required_error: "Join_date is required",
        }),
        rating: zod_1.z.string({
            required_error: "Rating is required",
        }),
        address: zod_1.z.string({
            required_error: "Address is required",
        }),
    }),
});
exports.driverValidationSchema = {
    createDriver,
};
