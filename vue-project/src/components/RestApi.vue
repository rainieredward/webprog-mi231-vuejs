<template>
  <div>
    <h2>JSONPlaceholder API Demo</h2>

    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>

    <h3>Posts</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} (ID: {{ post.id }})
        <button @click="editPost(post)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>

    <h3>Add New Post</h3>
    <form @submit.prevent="addPost">
      <div>Title:</div>
      <div>{{ newPost.title }}</div>

      <div>Body:</div>
      <div>{{ newPost.body }}</div>

      <button type="submit">Add Post</button>
    </form>

    <div v-if="editingPost">
      <h3>Edit Post</h3>
      <form @submit.prevent="updatePost">
        <div>Title:</div>
        <div>{{ editPostData.title }}</div>

        <div>Body:</div>
        <div>{{ editPostData.body }}</div>

        <button type="submit">Update Post</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(false);
const error = ref(null);
const newPost = reactive({ title: 'New Title Here', body: 'New Body Here' });
const editingPost = ref(false);
const editPostData = reactive({ title: 'Edit Title Here', body: 'Edit Body Here', id: null });
const selectedPost = ref(null);

const fetchPosts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const addPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    posts.value.push(response.data);
  } catch (err) {
    error.value = err.message;
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    posts.value = posts.value.filter(post => post.id !== id);
  } catch (err) {
    error.value = err.message;
  }
};

const editPost = (post) => {
  editingPost.value = true;
  editPostData.title = post.title;
  editPostData.body = post.body;
  editPostData.id = post.id;
  selectedPost.value = post;
};

const updatePost = async () => {
  try {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${editPostData.id}`, editPostData);
    editingPost.value = false;
    selectedPost.value = null;
  } catch (err) {
    error.value = err.message;
  }
};

const cancelEdit = () => {
  editingPost.value = false;
  editPostData.title = 'Edit Title Here';
  editPostData.body = 'Edit Body Here';
  editPostData.id = null;
  selectedPost.value = null;
};

onMounted(fetchPosts);
</script>
