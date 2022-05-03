<template>
  <div>
    <h1>{{ slug }}</h1>
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  async asyncData({ params }) {
    const slug = params.slug;
    let data = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );
    let { title, body } = data["data"];
    return { slug, title, body };
  },

  layout: "custom",
};
</script>
