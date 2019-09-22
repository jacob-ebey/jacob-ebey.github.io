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
  <title>Projects | Jacob Ebey</title>
</svelte:head>

<div class="hero">
  <h1>Some of the projects I have out there for others.</h1>
</div>

<div class="posts">
  <article class="post">
    <h2>
      <a href="/projects/movie-explorer">Movie Explorer</a>
    </h2>
    <p>A simple android application to browse movies that I used to learn MvvmCross.</p>
  </article>
  
  <article class="post">
    <h2>
      <a href="/projects/simple-ux">Simple UX</a>
    </h2>
    <p>Simple yet elegant components for Preact.</p>
  </article>

  <article class="post">
    <h2>
      <a href="/projects/tiny-graphql">Tiny GraphQL</a>
    </h2>
    <p>
      A tiny GraphQL client for making your dev and user experience better than
      ever.
    </p>
  </article>
</div>
