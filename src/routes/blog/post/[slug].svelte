<script context="module">
  import { url } from "../../../blog.json";

  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query Post($slug: String) {
            post: blogPost(where: {
              slug: $slug
            }) {
              slug
              createdAt
              title
              content
            }
          }`,
        variables: {
          slug: params.slug
        }
      })
    });
    const json = await res.json();

    if (res.status === 200) {
      return json.data;
    } else {
      this.error(res.status, json && json.errors);
    }
  }
</script>

<script>
  import marked from "marked";
  import Prism from "prismjs";
  import { onMount } from "svelte";

  import resume from "../../../resume.json";

  export let post;

  onMount(() => {
    Prism.highlightAll();
  });
</script>

<style type="text/sass">
  @import "../../../_variables";

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-color;
    color: $primary-text-color;
    padding: 5rem 2rem;
  }

  .content {
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 5rem;
    padding: 0 2rem;
  }

  .content :global(img) {
    max-width: 100%;
  }
</style>

<svelte:head>
  <title>Blog | Jacob Ebey</title>
  <link rel='stylesheet' href='3rdparty/prism-okaidia.css'>
</svelte:head>

<div class="hero">
  <h1>{post.title}</h1>
</div>

<div class="content">
  {@html marked(post.content)}
</div>
