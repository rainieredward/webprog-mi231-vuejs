<template>
  <div class="profile-container">
    <section class="main-content">
      <h2>About Me</h2>
      <p>I'm a passionate developer, exploring the world of web technologies.</p>

      <h2>Education & Achievements</h2>
      <p>Currently studying at Asia Pacific College, specializing in IT.</p>

      <h2>Skills & Experience</h2>
      <p>Vue.js, Django, React, and more!</p>

      <h2>Hobbies & Interests</h2>
      <p>Gaming, Coding, Retro Aesthetics.</p>

      <h2>Goals & Dreams</h2>
      <p>To innovate and create meaningful tech solutions.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PersonalProfile",
};
</script>

<style>
.profile-container {
  background: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
}

h2 {
  color: #ff6600;
}

p {
  color: white;
  font-size: 14px;
}
</style>
