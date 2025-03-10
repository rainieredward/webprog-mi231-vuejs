<template>
  <div class="comment-section">
    <h2>Leave a Comment</h2>
    
    <form @submit.prevent="submitComment">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <textarea v-model="comment" placeholder="Your Comment" required></textarea>
      <button type="submit">Submit</button>
    </form>

    <div v-if="comments.length" class="comments-list">
      <h3>Comments</h3>
      <div v-for="(c, index) in comments" :key="index" class="comment">
        <strong>{{ c.name }}:</strong> <p>{{ c.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      comments: [], // Stores submitted comments
    };
  },
  methods: {
    submitComment() {
      if (this.name && this.comment) {
        this.comments.push({ name: this.name, text: this.comment });
        this.name = "";
        this.comment = "";
      }
    },
  },
};
</script>

<style>
.comment-section {
  max-width: 500px;
  margin: 20px auto;
  text-align: left;
  background: #222;
  padding: 20px;
  border-radius: 10px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  background: #ffcc00;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.comments-list {
  margin-top: 20px;
}

.comment {
  background: #333;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
}
</style>
