<template>
<ul>
      <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
    </ul>
  <div class="container">
    <header>
      <h1>Rainier Edward Lopez</h1>
    </header>
    <main>
      <personal-profile />
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const instruments = ref([])

  async function getInstruments() {
    const { data } = await supabase.from('instruments').select()
    instruments.value = data
  }

  onMounted(() => {
    getInstruments()
  })

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
