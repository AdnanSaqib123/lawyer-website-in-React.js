const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./model/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

// Login Endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    EmployeeModel.findOne({ email: email })
    .then(user => {
        if (user) {
            if (user.password === password) {
                // Success: Return success flag and user details
                res.json({
                    success: true,
                    user: {
                        name: user.name,
                        email: user.email
                    }
                });
            } else {
                // Incorrect password
                res.json({
                    success: false,
                    message: "The password is incorrect"
                });
            }
        } else {
            // No record found
            res.json({
                success: false,
                message: "No record existed"
            });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request"
        });
    });
});

// Register Endpoint
app.post("/register", (req, res) => {
    const { email, name, password } = req.body;
    
    // Check if the email already exists
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // Email already exists
                res.json({ success: false, message: "Email already registered" });
            } else {
                // Create new user
                EmployeeModel.create({ email, name, password })
                    .then(() => res.json({ success: true, message: "Registration successful" }))
                    .catch(err => res.json({ success: false, message: err.message }));
            }
        })
        .catch(err => res.json({ success: false, message: err.message }));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
