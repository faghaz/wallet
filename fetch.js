fetch("https://api.example.com/user/update", {
  method: "PUT", // Or "PATCH"
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  body: JSON.stringify({
    balance: 100 // New balance value
  })
})
.then(response => response.json())
.then(data => console.log("Update successful", data))
.catch(error => console.error("Error:", error));
