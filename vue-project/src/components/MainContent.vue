<template>
  <div>
    <h1>Personal Profile Web Page</h1>
    <section class="main-content">
      <div>1. About me</div>
      <div>2. Education/Achievements</div>
      <div>3. Course</div>
      <div>4. IT Experience</div>
      <div>5. Hobbies & Interests</div>
      <div>6. Goals In Life / Dreams</div>
      <div>7. Picture Gallery</div>
    </section>

    <comment-section />

    <footer>Asia Pacific College</footer>
  </div>
  
</template>

<script>
import CommentSection from "./CommentSection.vue";

export default {
  components: {
    CommentSection,
  },
};
</script>
