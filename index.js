// app.js
const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

// New route for rides page
app.get('/rides', (req, res) => {
  // Here you would typically fetch data from your SQLite database
  // For now, we'll use dummy data
  const rides = [
    { name: "Space Mountain", category: "Thrill Rides", price: 15.00, image: "/images/space-mountain.jpg" },
    { name: "Pirates of the Caribbean", category: "Water Rides", price: 12.00, image: "/images/pirates-caribbean.jpg" },
    { name: "Haunted Mansion", category: "Dark Rides", price: 10.00, image: "/images/haunted-mansion.jpg" },
    // Add more rides as needed
  ];

  res.render('rides', { rides: rides });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});