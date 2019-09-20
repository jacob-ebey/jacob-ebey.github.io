<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    flex: 1;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
