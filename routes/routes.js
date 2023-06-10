const express = require("express");
const router = express.Router();
const Handover = require("../models/Handover");

router
	.route("/:shift")
	.get(async (req, res) => {
		let shiftNum = Number(req.params.shift.charAt(req.params.shift.length - 1));

		let yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);

		let today = new Date();
		let handovers = await Handover.find({
			date: {
				$gte: yesterday.toISOString(),
				$lte: today.toISOString(),
			},
			shift: shiftNum,
		});
		console.log(handovers);
		res.render("../views/shifts.ejs", {
			handovers: handovers,
			shift: shiftNum,
		});
	})
	.post(async (req, res) => {
		const handover = new Handover({
			handovers: req.body.Handovers,
			assignedBy: req.body.Assigned,
			followedBy: req.body.Followed,
			ticketNumber: req.body.Ticket,
			comments: req.body.Comments,
			email: req.body.email,
			shift: Number(req.params.shift.charAt(req.params.shift.length - 1)),
		});
		handover.save().then(() => {
			console.log("User Saved");
			res.redirect("/");
		});
	});

module.exports = router;
