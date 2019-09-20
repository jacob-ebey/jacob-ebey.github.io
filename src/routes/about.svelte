<style type="text/sass">
  @import "../variables";
  @import "../styles/grid";

  .hero {
    min-height: calc(90vh - 6rem);
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-grid {
    justify-content: center;
  }

  .hero-column {
    position: relative;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $primary-color;
    color: $primary-text-color;
    padding: 5rem;
  }

  .hero-text h1 {
    font-size: 5em;
    margin: 0;
  }

  .details .column {
    padding: 2rem;
  }

  .hero-img-column {
    height: 90vh;
    position: relative;
    padding: 0 !important;
  }

  .hero-img-column img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 900px) {
    .hero-column {
      padding: 5rem 2rem;
    }
  }
</style>

<svelte:head>
  <title>About | Jacob Ebey</title>

  <link rel="preload" as="image" href="images/me.jpg" />
</svelte:head>

<article class="hero">
  <div class="grid halves hero-grid">
    <div class="column hero-column hero-img-column">
      <img src="images/me.jpg" alt="Me" />
    </div>
    <div class="column hero-column hero-text">
      <h1>Jacob Ebey</h1>
      <p>
        I am a seasoned software expert who has developed products for
        enterprise clients such as Microsoft, Alaska Airlines and OMAX
        Corporation. I specialize in building applications specific to the
        business needs of my clients. I have done work in software development,
        mobile app creation, front-end/back-end web, graphic design, and 3D
        rendering.
      </p>
    </div>
  </div>
</article>

<article class="grid thirds details">
  <div class="column">
    <h2>Research</h2>
    <p>
      Working cloesly with your internal staff to fully understand the business
      goals you wish to achieve, along with any initial visions and development
      ensures everyone on the same path to prosperity.
    </p>
  </div>
  <div class="column">
    <h2>Plan</h2>
    <p>
      Working in an agile environment allows for high productivity, by planning
      the features for an initial MVP, agreeing on a technical path, and
      beginning work - all while new features are being conceptualized,
      iterated, and added to the backlog.
    </p>
  </div>
  <div class="column">
    <h2>Develop</h2>
    <p>
      Staying up to date on technology and patterns are important, allowing me
      to work within your existing stack, or propose one that will scale far
      into the future.
    </p>
  </div>
</article>
