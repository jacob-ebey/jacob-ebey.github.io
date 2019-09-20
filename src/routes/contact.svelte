<script>
  import resume from "../resume.json";
</script>

<style>
  .c-form {
    display: block;
    border: none;
    margin: 5rem auto;
    max-width: 500px;
  }

  .c-form__heading {
    display: block;
    width: 100%;
    font-size: 2em;
    border-bottom: 1px solid #ccc;
    padding: 0 0 0.5rem 0;
    margin: 0 0 0.6rem 0;
  }

  .c-form__row + .c-form__row {
    padding-top: 1rem;
  }

  .c-form__row [name] {
    min-width: 66.6666666667%;
  }

  .boilerform .c-input-field {
    background: #fff;
    border: 1px solid #ccc;
    padding: 11px 15px 10px 15px;
    border-radius: 2px;
  }

  .boilerform {
    color: #141414;
    border-color: #ccc;
  }

  .boilerform,
  .boilerform * {
    box-sizing: border-box;
  }

  .boilerform [class*="-field"] {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    line-height: 1.1;
  }

  .boilerform ::-webkit-search-decoration {
    display: none;
  }

  .boilerform input::-webkit-input-placeholder,
  .boilerform textarea::-webkit-input-placeholder {
    line-height: normal;
  }

  .boilerform .c-button {
    display: inline-block;
    border: 0;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: #666;
    color: #fff;
    padding: 11px 25px 10px 25px;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-weight: 600;
  }

  .boilerform .c-button:hover,
  .boilerform .c-button:focus {
    background: #888;
  }

  .boilerform .c-input-field--multiline {
    vertical-align: top;
    overflow: auto;
    width: 100%;
  }

  .boilerform .c-input-field--multiline:not([rows]) {
    min-height: 80px;
  }

  .boilerform .c-label {
    display: inline;
    font-weight: 700;
  }

  .boilerform .c-label[for] {
    cursor: pointer;
  }

  .boilerform .c-label:after {
    content: "\A";
    white-space: pre;
  }

  .boilerform .c-label + [class*="field"] {
    margin-top: 2px;
  }
</style>

<svelte:head>
  <title>Contact | Jacob Ebey</title>
</svelte:head>

<form
  class="boilerform"
  action="https://formspree.io/{resume.basics.email}"
  method="post">
  <fieldset class="c-form">
    <legend class="c-form__heading">Contact me</legend>
    <div class="c-form__row">
      <label for="name" class="c-label">Name</label>
      <input type="text" name="name" id="name" class="c-input-field" required />
    </div>
    <div class="c-form__row">
      <label for="email" class="c-label">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="c-input-field"
        required />
    </div>
    <div class="c-form__row">
      <label for="message" class="c-label">Your message</label>
      <textarea
        name="message"
        id="message"
        class="c-input-field c-input-field--multiline"
        rows="10" />
    </div>
    <div class="c-form__row">
      <button class="c-button" type="submit">Submit</button>
    </div>
  </fieldset>
</form>
