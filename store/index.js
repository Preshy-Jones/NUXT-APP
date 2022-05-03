import axios from "axios";

export const state = () => ({
  counter: 0,
  posts: [],
});

export const mutations = {
  increment(state) {
    state.counter++;
  },

  loadPosts(state, payload) {
    state.posts = payload;
  },
};
export const actions = {
  async loadPosts(context) {
    let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    context.commit("loadPosts", data.data);
  },
};
