/* Fetch and display users
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
*/
// Helper: send logs to backend
async function sendLog(level, message) {
  console.log(`[${level}] ${message}`); // local console
  try {
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level, message })
    });
  } catch (err) {
    console.error("❌ Failed to send log to backend:", err);
  }
}

// Fetch and display users
async function fetchUsers() {
  sendLog("INFO", "Fetching users...");
  try {
    const res = await fetch('/api/users');
    const users = await res.json();
    sendLog("SUCCESS", `Fetched ${users.length} users`);
    const userList = document.getElementById('users');
    userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (err) {
    sendLog("ERROR", "Error fetching users: " + err.message);
  }
}

// Handle form submission
document.getElementById('addUserForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  sendLog("INFO", `Adding new user: ${name}, ${email}`);

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    if (res.ok) {
      const data = await res.json();
      sendLog("SUCCESS", `User added: ${data.name} (${data.email})`);
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      fetchUsers();
    } else {
      sendLog("ERROR", `Failed to add user. Status: ${res.status}`);
    }
  } catch (err) {
    sendLog("ERROR", "Error adding user: " + err.message);
  }
});

// Load users on page load
sendLog("INFO", "Frontend script loaded. Fetching users...");
fetchUsers();

