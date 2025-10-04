chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    const newUrl = url.href.replace("deadbydaylight.fandom.com", "deadbydaylight.wiki.gg");
    return { redirectUrl: newUrl };
  },
  {
    urls: ["*://deadbydaylight.fandom.com/*"],
    types: ["main_frame"]
  },
  ["blocking"]
);
