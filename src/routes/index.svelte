<style type="text/sass">
  @import "../_variables";
  @import "../styles/grid";

  article {
    padding: 0 3rem;
  }

  .article-header {
    font-size: 2em;
    margin-bottom: 3rem;
  }

  .actions {
    margin-top: 3rem;
  }

  .hero {
    background-color: $primary-color;
    color: $primary-text-color;
    min-height: calc(90vh - 6rem);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
  }

  .hero-grid {
    justify-content: center;
  }

  .hero-column {
    padding: 0 1.5rem;
    max-width: 600px;
  }

  .hero-column:first-child {
    padding-left: 3rem;
  }

  .hero-column:last-child {
    padding-right: 3rem;
  }

  .hero-callout {
    font-size: 2.2em;
    margin: 0;
    text-align: right;
  }

  .img-column {
    text-align: center;
    padding: 0 0.25rem;
  }

  .align-center {
    text-align: center;
  }

  .morphing-button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vw;
    text-decoration: none;
    color: $primary-color;
  }

  .morphing-circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 6px solid $primary-color;
    border-radius: 50%;
    padding: 3rem;
    width: 40%;
    height: 40%;
    transition: all 0.3s ease-in-out;
  }

  .morphing-button__invert {
    background-color: $primary-color;
    color: $primary-text-color;
  }

  .morphing-button__invert .morphing-circle {
    border: 6px solid $primary-text-color;
  }

  .morphing-button:hover .morphing-circle {
    border-radius: 0;
  }

  .morphing-circle h4 {
    font-size: 0.8em;
    margin: 0;
    font-style: italic;
  }

  .morphing-circle h3 {
    font-size: 2em;
    margin: 0;
  }

  @media (max-width: 900px) {
    .grid {
      display: block;
    }

    .hero-column {
      padding: 0 3rem;
      max-width: unset;
    }

    .hero-callout {
      text-align: unset;
    }

    .morphing-button {
      height: 100vw;
    }

    .actions {
      margin-top: 0;
    }
  }
</style>

<svelte:head>
  <title>Home | Jacob Ebey</title>
</svelte:head>

<article class="hero">
  <div class="grid halves hero-grid">
    <div class="column hero-column">
      <h1 class="hero-callout">
        Hi. I’m Jacob, a software engineer from Seattle, Washington. Please take
        a look around!
      </h1>
    </div>
    <div class="column hero-column">
      <p>
        I am passionate about building excellent software that improves the
        lives of those around me. I specialize in creating software for clients
        ranging from individuals and small-businesses all the way to large
        enterprise corporations. All of my work is produced locally from
        Seattle, Washington. What would you do if you had a software expert
        available at your fingertips?
      </p>
    </div>
  </div>
</article>

<article>
  <h2 class="align-center article-header">Favorite Technologies</h2>

  <div class="grid fourths">
    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/graphql.svg"
        height="100"
        alt="GraphQL logo" />
      <h3 class="align-center">GraphQL</h3>
      <p class="align-center">
        When appropriate, GraphQL can be a powerful tool to build a
        comprehensive data-model for your business or applications.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/swagger.png"
        height="100"
        alt="Swagger logo" />
      <h3 class="align-center">REST</h3>
      <p class="align-center">
        A trusty old REST API is never out of the question.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/websockets.png"
        height="100"
        alt="Websockets logo" />
      <h3 class="align-center">Web Sockets</h3>
      <p class="align-center">
        Sometimes 'realtime' subscriptions to data are handy.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/mongodb.png"
        height="100"
        alt="MongoDB logo" />
      <h3 class="align-center">MongoDB</h3>
      <p class="align-center">
        Document databases can be an awesome jumping off point.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/neo4j.png"
        height="100"
        alt="Neo4j logo" />
      <h3 class="align-center">Neo4j</h3>
      <p class="align-center">
        Graph databases can give you opportunities for deep data analytics you
        may not have planned for.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/svelte.svg"
        height="100"
        alt="Svelte logo" />
      <h3 class="align-center">Svelte</h3>
      <p class="align-center">
        Sometimes performance comes first and Svelte exists for this very
        reason.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/react.png"
        height="100"
        alt="React logo" />
      <h3 class="align-center">React</h3>
      <p class="align-center">
        From class components to hooks, I'm ready to dive deep into a react
        based project.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/amp.svg"
        height="100"
        alt="Google AMP logo" />
      <h3 class="align-center">AMP</h3>
      <p class="align-center">
        Working within a framework can lead to some great results, just take
        this page into consideration.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/azure.png"
        height="100"
        alt="Azure logo" />
      <h3 class="align-center">Azure</h3>
      <p class="align-center">
        Devops in Azure made easy with Azure Resource Manager (ARM) templates.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/zeit-now.jpeg"
        height="100"
        alt="Azure logo" />
      <h3 class="align-center">Zeit Now</h3>
      <p class="align-center">
        Static frontends and serverless backends made easy.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/heroku.png"
        height="100"
        alt="Azure logo" />
      <h3 class="align-center">Heroku</h3>
      <p class="align-center">
        Sometimes containerized applications are a must, and Heroku is here to
        assist us.
      </p>
    </div>

    <div class="column img-column">
      <img
        class="grid-img"
        layout="flex-item"
        src="images/xamarin.png"
        height="100"
        width="100"
        alt="Azure logo" />
      <h3 class="align-center">Xamarin</h3>
      <p class="align-center">Let's get our mobile on!</p>
    </div>
  </div>
</article>

<br />

<div class="grid halves actions">
  <div class="column">
    <a href="/about" class="morphing-button">
      <div class="morphing-circle">
        <h4>Continue Exploring?</h4>
        <h3>About Me</h3>
      </div>
    </a>
  </div>
  <div class="column">
    <a href="/contact" class="morphing-button morphing-button__invert">
      <div class="morphing-circle">
        <h4>Convinced?</h4>
        <h3>Contact Me</h3>
      </div>
    </a>
  </div>
</div>
