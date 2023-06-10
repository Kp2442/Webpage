const mongoose = require("mongoose");

const handoverSchema = new mongoose.Schema({
	handovers: String,
	assignedBy: String,
	followedBy: String,
	ticketNumber: String,
	comments: String,
	email: String,
	shift: Number,
	date: {
		type: Date,
		default: () => new Date(),
	},
});

module.exports = mongoose.model("Handover", handoverSchema);
