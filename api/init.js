// Sets up the API reference: own files only, no requests to other servers.
(function () {
  var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    metaData: { title: "API reference — Lastmod for developers" },
  });
})();
