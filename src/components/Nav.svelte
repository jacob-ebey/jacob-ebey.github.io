<script>
  import resume from "../resume.json";
  import { useScroll } from "../utilities/scroll";

  export let segment;

  let open = false;

  const scroll = useScroll();

  $: if (open) {
    scroll.disable();
  } else {
    scroll.enable();
  }
</script>

<style type="text/sass">
  @import "../_variables";

  .header-spacer {
    height: 4rem;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    background-color: $primary-color;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 4rem;
    padding: 0 1rem;
  }

  .header-title {
    flex: 1;
  }

  .header-title > a {
    font-size: 1.17em;
    font-weight: 600;
    text-decoration: none;
    color: $primary-text-color;
  }

  .header-button {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }

  .sidenav-overlay {
    z-index: 9;
    display: none;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  .sidenav-overlay-open {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .sidenav {
    z-index: 10;
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    background-color: $white;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .sidenav-open {
    width: 250px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: $primary-color;
    display: block;
    transition: right 0.3s;
  }

  .sidenav a:hover {
    color: darken($primary-color, 30%);
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }

  @media print {
    nav,
    header,
    .header-spacer {
      display: none;
    }
  }
</style>

<noscript>
  <style>
    .sidenav {
      position: relative !important;
      display: flex;
      height: unset !important;
      width: unset !important;
      padding-top: 0 !important;
    }
  </style>
</noscript>

<div
  class="sidenav-overlay"
  on:click={() => (open = false)}
  class:sidenav-overlay-open={open} />

<header>
  <img
    class="header-button"
    role="button"
    tabindex="0"
    on:click={() => (open = true)}
    src="images/hamburger.svg"
    alt="Menu" />
  <div class="header-title">
    <a href="/">{resume.basics.name}</a>
  </div>
</header>
<div class="header-spacer" />

<nav class="sidenav" class:sidenav-open={open}>
  <a on:click={() => (open = false)} href="/">Home</a>
  <a on:click={() => (open = false)} href="/about">About</a>
  <a on:click={() => (open = false)} href="/blog">Blog</a>
  <a on:click={() => (open = false)} href="/resume">Resume</a>
  <a on:click={() => (open = false)} href="/contact">Contact</a>
</nav>
