function goToDashboard() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    localStorage.setItem("internName", name);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter your name.");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const internName = localStorage.getItem("internName");
  if (document.getElementById("internName") && internName) {
    document.getElementById("internName").textContent = internName;

    // Fetch data from backend
    fetch("http://localhost:3000/api/intern")
      .then(res => res.json())
      .then(data => {
        document.getElementById("referralCode").textContent = data.referralCode;
        document.getElementById("donationsRaised").textContent = data.totalDonations;
      })
      .catch(() => {
        document.getElementById("referralCode").textContent = "Error";
        document.getElementById("donationsRaised").textContent = "Error";
      });
  }
});