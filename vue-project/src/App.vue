<template>
  <div class="container">
    <header>
      <h1>Personal Profile Web Page</h1>
    </header>
    <main>
      <personal-profile />
    </main>
    <footer>Asia Pacific College</footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  font-family: 'Press Start 2P', cursive;
  background-color: #121212;
  color: #f5d76e;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

header {
  font-size: 24px;
  padding: 10px;
  background: #ff6600;
  color: white;
  border-radius: 10px;
}
</style>
