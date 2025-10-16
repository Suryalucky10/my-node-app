/* controllers/userController.js
const { users, addUser } = require('../models/userModel');

// Get all users
const getUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Create a new user
const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Name and email are required' });

  const newUser = addUser(name, email);
  res.status(201).json(newUser);
};

module.exports = { getUsers, getUserById, createUser };
*/
const { users, addUser } = require("../models/userModel");
const logger = require("../logger"); // <-- Import our logger

// Get all users
const getUsers = (req, res) => {
  logger.info("Fetching all users");
  res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    logger.warn(`User not found with ID: ${req.params.id}`);
    return res.status(404).json({ message: "User not found" });
  }
  logger.info(`User fetched with ID: ${req.params.id}`);
  res.json(user);
};

// Create a new user
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    logger.error("Attempted to create user with missing name or email");
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = addUser(name, email);
  logger.info(`New user created: ${JSON.stringify(newUser)}`);
  res.status(201).json(newUser);
};

module.exports = { getUsers, getUserById, createUser };

