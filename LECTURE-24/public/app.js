const API_URL = "http://localhost:3002"; // change if backend runs elsewhere

// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name, email, password })
    });
    const data = await res.json();
    
    alert(data.message || "Signed up!");
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
    } else {
      alert(data.message || "Login failed!");
    }
  });
}

// Blog handling
const blogForm = document.getElementById("blogForm");
if (blogForm) {
  blogForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/blogs`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, body: content })
    });

    const data = await res.json();
    alert(data.message || "Blog posted!");
    loadBlogs();
  });
}


// Load Blogs
async function loadBlogs() {
  const blogsDiv = document.getElementById("blogs");
  if (!blogsDiv) return;

  const res = await fetch(`${API_URL}/blogs`);
  const data = await res.json();

  blogsDiv.innerHTML = "";
  data.forEach(blog => {
    const div = document.createElement("div");
    div.classList.add("blog");
    div.innerHTML = `<h4>${blog.title}</h4><p>${blog.content}</p>`;
    blogsDiv.appendChild(div);
  });
}

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// Auto-load blogs if on dashboard
if (document.getElementById("blogs")) {
  loadBlogs();
}
