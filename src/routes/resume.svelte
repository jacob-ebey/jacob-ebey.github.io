<script>
  import resume from "../resume.json";
</script>

<style type="text/sass">
  @import "../variables";

  .resume {
    padding: 2rem;
    height: min-content;
  }

  .resume_header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .resume_summary {
    flex: 1;
    text-align: center;
  }

  .resume_summary h1 {
    color: $primary-color;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  .resume_summary h2 {
    font-weight: 300;
    margin: 0.5em 0;
  }

  .resume_contact div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .resume_contact div a {
    color: $primary-color;
    display: block;
    margin: 0.5em;
    text-decoration: none;
  }

  .resume_contact div p {
    margin: 0.5em;
  }

  .resume_section-label {
    color: $primary-color;
    font-size: 1.5em;
    font-weight: 400;
  }

  .resume_section {
    display: flex;
    flex-direction: column;
  }

  .resume_section .resume_section-title a,
  .resume_section .resume_section-title p {
    font-weight: 400;
    font-size: 1.2em;
    color: black;
    text-decoration: none;
    margin: 0.5em 0;
  }

  .resume_section-date {
    font-size: 0.8em !important;
  }

  .resume_keyword {
    background-color: $primary-color;
    color: white;
    display: inline-block;
    margin-right: 1em;
    padding: 0.5em 1em;
    border-radius: 10px;
    font-size: 0.75em;
    margin-bottom: 0.5em;
  }

  @media (min-width: 1024px) {
    .resume hr {
      margin-right: calc(208px + 1em);
    }

    .resume_header {
      flex-direction: row;
      align-items: flex-start;
    }

    .resume_summary {
      text-align: start;
      padding-right: 1em;
    }

    .resume_contact {
      width: 208px;
    }

    .resume_contact div {
      display: block;
      flex-wrap: unset;
      border-left: 1px solid #ccc;
      padding-left: 1em;
    }

    .resume_contact div a {
      margin: 0.5em 0;
    }
    .resume_contact div p {
      margin: 0.5em 0;
    }

    .resume_section article {
      margin-right: calc(208px + 1em);
    }

    .resume_section-title {
      display: flex;
      align-items: center;
    }

    .resume_section-title a {
      flex: 1;
    }
  }

  blockquote {
    padding: 1em;
    border-left: 5px solid #999;
    margin: 0;
  }

  blockquote:before {
    display: none;
  }

  blockquote:not(:first-of-type) {
    margin-top: 0.5em;
  }

  blockquote p {
    color: #555;
    font-size: 12pt;
    line-height: 1.4;
    font-family: "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif",
      "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
  }

  blockquote footer {
    background-color: unset;
    margin-top: 0.5em;
    padding: 0;
    color: #777;
    font-size: 12pt;
    text-align: left;
    font-style: italic;
  }

  blockquote footer:before {
    content: "— ";
  }

  blockquote:nth-of-type(even) {
    text-align: right;
    border-left: none;
    border-right: 5px solid #999;
  }

  blockquote:nth-of-type(even) footer {
    text-align: right;
  }

  blockquote:nth-of-type(even) footer:before {
    content: "";
  }

  blockquote:nth-of-type(even) footer:after {
    content: " —";
  }

  @media screen and (min-width: 300px) {
    blockquote {
      padding: 1em 20% 1em 1em;
    }

    blockquote p {
      font-size: 14pt;
    }

    blockquote:nth-of-type(even) {
      padding: 1em 1em 1em 20%;
    }
  }

  @media print {
    :global(body) {
      font-size: 11pt;
    }

    .resume {
      padding: 0 1em;
    }
  }
</style>

<svelte:head>
  <title>Resume | Jacob Ebey</title>
</svelte:head>

{#if resume}
  <div class="resume">
    <div class="resume_header">
      <div class="resume_summary">
        <h1>{resume.basics.name}</h1>
        <h2>{resume.basics.label}</h2>
        <p>{resume.basics.summary}</p>
      </div>
      <div class="resume_contact">
        <div>
          <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
          <p>{resume.basics.phone}</p>
          <a href={`${resume.basics.website}`}>{resume.basics.website}</a>
        </div>
      </div>
    </div>

    {#if resume.work}
      <h1 class="resume_section-label">Experience</h1>

      {#each resume.work as work, i}
        {#if i > 0}
          <hr />
        {/if}
        <div class="resume_section">
          <article>
            <div class="resume_section-title">
              <a href={work.website}>
                {work.company}
                <small>- {work.position}</small>
              </a>
              <p class="resume_section-date">
                {work.startDate} - {work.endDate}
              </p>
            </div>
            <p>{work.summary}</p>
            {#if work.highlights}
              <ul>
                {#each work.highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            {/if}
          </article>
        </div>
      {/each}
    {/if}
    {#if resume.skills}
      <h1 class="resume_section-label">Skills</h1>

      {#each resume.skills as skill}
        <div class="resume_section">
          <article>
            <div class="resume_section-title">
              <p>
                {skill.name}
                <small>- {skill.level}</small>
              </p>
            </div>
            {#if skill.keywords}
              <p>
                {#each skill.keywords as keyword}
                  <span class="resume_keyword">{keyword}</span>
                {/each}
              </p>
            {/if}
          </article>
        </div>
      {/each}
    {/if}
    {#if resume.volunteer}
      <h1 class="resume_section-label">Volunteer</h1>

      {#each resume.volunteer as volunteer, i}
        {#if i > 0}
          <hr />
        {/if}
        <div class="resume_section">
          <article>
            <div class="resume_section-title">
              <a href={volunteer.website}>
                {volunteer.organization}
                <small>- {volunteer.position}</small>
              </a>
              <p class="resume_section-date">
                {volunteer.startDate} - {volunteer.endDate}
              </p>
            </div>
            <p>{volunteer.summary}</p>
            {#if volunteer.highlights}
              <ul>
                {#each volunteer.highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            {/if}
          </article>
        </div>
      {/each}
    {/if}
    {#if resume.awards}
      <h1 class="resume_section-label">Awards</h1>

      {#each resume.awards as award, i}
        {#if i > 0}
          <hr />
        {/if}
        <div class="resume_section">
          <article>
            <div class="resume_section-title">
              <p>
                {award.title}
                <small>- {award.awarder} - {award.date}</small>
              </p>
            </div>
            <p>{award.summary}</p>
            {#if award.highlights}
              <ul>
                {#each award.highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            {/if}
          </article>
        </div>
      {/each}
    {/if}
    {#if resume.skills}
      <h1 class="resume_section-label">Languages</h1>

      {#each resume.languages as language}
        <div class="resume_section">
          <article>
            <div class="resume_section-title">
              <p>
                {language.language}
                <small>- {language.fluency}</small>
              </p>
            </div>
          </article>
        </div>
      {/each}
    {/if}
    {#if resume.skills}
      <h1 class="resume_section-label">Interests</h1>

      {#each resume.interests as interest}
        <div class="resume_section">
          <article>
            <div class="resume_section-title">
              <p>{interest.name}</p>
            </div>
            {#if interest.keywords}
              <p>
                {#each interest.keywords as keyword}
                  <span class="resume_keyword">{keyword}</span>
                {/each}
              </p>
            {/if}
          </article>
        </div>
      {/each}
    {/if}
    {#if resume.references}
      <h1 class="resume_section-label">References</h1>
      <div class="resume_section">
        <article>
          {#each resume.references as reference}
            <blockquote>
              <p>
                <q>{reference.reference}</q>
              </p>
              <footer>{reference.name}</footer>
            </blockquote>
          {/each}
        </article>
      </div>
    {/if}
  </div>
{/if}
