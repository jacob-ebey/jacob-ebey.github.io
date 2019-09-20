<script context="module">
  import { url } from "../../blog.json";

  export async function preload(page, session) {
    const res = await this.fetch(
      url,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{
          posts: blogPosts(where: {
            status: PUBLISHED
          }) {
            slug
            title
            summary
          }
        }`
        })
      }
    );
    const json = await res.json();

    if (res.status === 200) {
      return json.data;
    } else {
      this.error(res.status, json && json.errors);
    }
  }
</script>

<script>
  import resume from "../../resume.json";

  export let pageInfo = { hasNextPage: false, hasPreviousPage: false };
  export let posts = [];
</script>

<style type="text/sass">
  @import "../../_variables";

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-color;
    color: $primary-text-color;
    padding: 5rem 2rem;
  }

  .posts {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .post {
    margin: 3rem 0;
  }
</style>

<svelte:head>
  <title>Blog | Jacob Ebey</title>
</svelte:head>

<div class="hero">
  <h1>Some random thoughts you might be interested in</h1>
</div>

<div class="posts">
  {#each posts as post, index (post.slug)}
    {#if index > 0}
      <hr />
    {/if}
    <article class="post">
      <h2>
        <a href="/blog/post/{post.slug}">{post.title}</a>
      </h2>
      <p>{post.summary}</p>
    </article>
  {/each}
</div>
