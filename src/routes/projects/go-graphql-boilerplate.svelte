<script context="module">
  import client from "../../tinyClient";
  

  export async function preload({ params, query }) {
    const res = await this.fetch(`https://raw.githubusercontent.com/jacob-ebey/go-graphql-boilerplate/master/README.md`);

    if (res.status !== 200) {
      this.error(500, res.body);
    }

    const [,...rest] = (await res.text()).split('\n');

    return { readme: rest.join('\n') };
  }
</script>

<script>
  import marked from "marked";
  import Prism from "prismjs";
  import { onMount } from "svelte";

  export let readme;

  onMount(() => {
    Prism.highlightAll();
  });
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
  <title>Golang GraphQL Boilerplate | Jacob Ebey</title>
  <link rel="stylesheet" href="3rdparty/prism-okaidia.css" />
</svelte:head>

<div class="hero">
  <h1>Movie Explorer</h1>
</div>

<div class="content">
  {@html marked(readme)}
</div>
