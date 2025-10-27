const express = require('express');
const router = express.Router();

// temporary in-memory storage
let users = [
  { id: 1, name: 'Test User', email: 'test@example.com' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET single user
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;

