chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.startsWith("http://www.thegoodscentscompany.com/")) {
      console.log("Upgrading to HTTPS:", details.url);
      return { redirectUrl: details.url.replace("http://", "https://") };
    }
  },
  { urls: ["http://www.thegoodscentscompany.com/*"] },
  ["blocking"]
);