const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },

        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(v); // must end with @gmail.com
                },
                message: (props) => `${props.value} is not a valid Gmail address!`,
            },
        },

        company: { type: String },

        phone: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^\d{10}$/.test(v); // only 10 digits
                },
                message: (props) => `${props.value} is not a valid 10-digit phone number!`,
            },
        },

        channel: {
            type: String,
            enum: ["Website", "LinkedIn", "Referral", "Other"],
            required: true,
        },

        status: {
            type: String,
            enum: ["new", "connected", "lost"],
            default: "new",
        },

        image: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
