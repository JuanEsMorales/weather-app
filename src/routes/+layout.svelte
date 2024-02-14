<div>
  <slot />
</div>
<style>
  * {
    margin: 0 !important;
  }
  :global(body) {
    background: #fdfdfd;
    display: grid;
    place-content: center;
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :global(h1, h2, h3, h4) {
    margin: 0;
  }
  :global(*, *::after, *::before) {
    box-sizing: border-box;
  }
  div {
    aspect-ratio: 9 / 16;
    width: 400px;
    max-width: 100%;
    display: block;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: relative;
  }
</style>