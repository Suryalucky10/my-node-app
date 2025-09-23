// models/userModel.js

// Mock database (in-memory array)
let users = [
  { id: 1, name: 'Surya', email: 'surya@example.com' },
  { id: 2, name: 'Lucky', email: 'lucky@example.com' }
];

// Function to add new user
const addUser = (name, email) => {
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  return newUser;
};

module.exports = { users, addUser };
