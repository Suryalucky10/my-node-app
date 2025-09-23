// Fetch and display users
async function fetchUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();
  const userList = document.getElementById('users');
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
}

// Handle form submission
document.getElementById('addUserForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });

  if (res.ok) {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    fetchUsers(); // refresh list
  }
});

// Load users on page load
fetchUsers();
