<script context="module">
  import { url } from "../../blog.json";

  export function preload(page, session) {
    return this.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          blog: blogPostsConnection(where: {
            status: PUBLISHED
          }) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            posts: edges {
              data: node {
                slug
                title
                summary
              }
            }
          }
        }`
      })
    })
      .then(res => res.json())
      .then(json => json.data.blog);
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

<div class="hero">
  <h1>Some random thoughts you might be interested in</h1>
</div>

<div class="posts">
  {#each posts as post, index}
    {#if index > 0}
      <hr />
    {/if}
    <article class="post">
      <h2>
        <a href="/blog/post/{post.data.slug}">{post.data.title}</a>
      </h2>
      <p>{post.data.summary}</p>
    </article>
  {/each}
</div>
