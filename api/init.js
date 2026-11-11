// Sets up the API reference: own files only, no requests to other servers.
(function () {
  var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  // The page ships the reference as plain HTML for readers and crawlers without JavaScript. The interactive
  // reference takes its place: an emptied container makes it render fresh instead of trying to hydrate the text.
  var app = document.getElementById("app");
  if (app) app.replaceChildren();
  // The site header stays in view on a wide screen; the reference keeps its own sidebar and sticky parts below it.
  var header = document.querySelector(".site-header");
  var wide = window.matchMedia("(min-width: 48rem)");
  function offset() {
    var height = header && wide.matches ? header.offsetHeight : 0;
    document.documentElement.style.setProperty("--scalar-custom-header-height", height + "px");
  }
  offset();
  window.addEventListener("resize", offset);
  Scalar.createApiReference("#app", {
    url: new URL("/spec/v1.openapi.json", window.location.origin).href,
    theme: "none",
    forceDarkModeState: dark ? "dark" : "light",
    hideDarkModeToggle: true,
    hideTestRequestButton: true,
    hideClientButton: true,
    showDeveloperTools: "never",
    withDefaultFonts: false,
    telemetry: false,
    agent: { disabled: true },
    mcp: { disabled: true },
    documentDownloadType: "none",
    metaData: { title: "Lastmod API reference — read-only /v1 REST API" },
  });
})();
