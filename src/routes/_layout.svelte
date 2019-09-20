<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style type="text/sass">
  @import "../_variables";

  :global(a) {
    color: $primary-color;
  }

  :global(a:hover) {
    color: darken($primary-color, 30%);
  }

  main {
    flex: 1;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
