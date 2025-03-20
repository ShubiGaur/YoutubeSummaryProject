<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    <h1>YouTube Transcript & Summary</h1>
    <p>Enter a YouTube URL to get the transcript and summary:</p>
    <input v-model="videoUrl" type="text" placeholder="Paste YouTube URL here" />
    <button @click="fetchTranscript">Get Transcript</button>

    <div v-if="transcript">
      <h3>Transcript:</h3>
      <p>{{ transcript }}</p>
    </div>

    <div v-if="summary">
      <h3>Summary:</h3>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
