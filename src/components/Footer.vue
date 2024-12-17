<template>
  <div class="footer-container">
    <div class="footer-row">
      <div class="footer-column">
        <h4>About Us</h4>
        <p>Solstice was formed in 2024 in Scarborough, Canada. We provide the best streaming services at one
          of the lowest prices in the world while offering the best quality Movies.</p>
      </div>
      <div class="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Email: Sisi.huang@student.tdsb.on.ca</li>
          <li>Phone: +1 416-890-1234</li>
          <li>Location: 2621 Midland Ave</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">Facebook</a></li>
          <li><a href="https://x.com/?lang=en">Twitter</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component",
};
</script>

<style scoped>
.footer-container {
  background-color: black;
  color: white;
  padding: 20px 0;
  width: 100%;
  text-align: center;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.footer-column {
  flex: 1;
  min-width: 100px;
  text-align: center;
}

.footer-column h4 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column a {
  color: white;
  text-decoration: none;
}
</style>
