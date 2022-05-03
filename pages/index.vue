<template>
  <div>
    <nuxt-link to="/hello">hello</nuxt-link>
    <div>
      <div v-for="(post, index) in posts" :key="index">
        <h1>{{ post.title }}</h1>
        <p>
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
};
</script>
