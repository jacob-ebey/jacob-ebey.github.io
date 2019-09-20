<script context="module">
  import { url } from "../../../blog.json";

  export function preload(page, session) {
    const { slug } = page.params;

    return this.fetch(url, {
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
          slug
        }
      })
    })
      .then(res => res.json())
      .then(json => json.data);
  }
</script>

<script>
  import resume from "../../../resume.json";
  import marked from "marked";

  export let post;
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

<div class="hero">
  <h1>{post.title}</h1>
</div>

<div class="content">
  {@html marked(post.content)}
</div>
