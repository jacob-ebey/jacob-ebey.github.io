<style>
  footer {
    display: flex;
    background-color: #000000;
    color: #777777;
    overflow: hidden;
    padding: 1rem 3rem;
    font-size: 0.8em;
  }

  footer > p {
    flex: 1;
  }

  @media print {
    footer {
      display: none;
    }
  }

  /* IE 10 hack to hide footer because IE's flexbox is all fucked up. */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    footer {
      display: none;
    }
  }
</style>

<footer>
  <p>© 2019 Jacob Ebey</p>
  <a href="https://github.com/jacob-ebey" aria-label="Github">
    <amp-img src="images/github.png" width="50" height="50" alt="Github logo" />
  </a>
</footer>
