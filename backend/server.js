const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Dummy intern data
const internData = {
  name: "Lavanya",
  referralCode: "lavanya2025",
  totalDonations: 8700,
  rewards: [
    "Certificate of Appreciation",
    "Top 10 Leaderboard Badge",
    "Free Workshop Access"
  ]
};

app.get("/api/intern", (req, res) => {
  res.json(internData);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
