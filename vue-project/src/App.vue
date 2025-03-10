<template>
  <main-content />
  <restapi />
</template>

<script>
import MainContent from "./components/MainContent.vue";
import RestApi from "./components/RestApi.vue";

export default {
  components: {
    MainContent,
    RestApi
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #111;
  color: white;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
