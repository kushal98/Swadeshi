const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// DB connection
const db = require("./config/keys").MongoURI;
mongoose.connect(
	db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("MongoDB connected..."))
	.catch(console.err);

// Middleware
app.use(express.urlencoded({extended: false}));

// Static files
app.use(express.static(path.join(__dirname, "../HomePage")));

// Routes
//app.use("/wholesaler", require("./routes/wholesaler.js"));
//app.use("/farmer", require("./routes/farmer.js"));

// Port
const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	(err) => {
		if(err)
			throw err;

		console.log("Server started on http://localhost:" + PORT);
	}
);