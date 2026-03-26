if (window.__fbReelsAutoScrollInitialized) {
  console.debug("Auto Scroll Reels is already initialized on this page.");
} else {
  window.__fbReelsAutoScrollInitialized = true;

  const registeredVideos = new WeakSet();

  function scrollToNextReel() {
    const selectors = [
      '[aria-label="Next Card"]',
      '[aria-label="Next"]',
      '[aria-label="Next reel"]',
      'div[role="button"][tabindex="0"][aria-label*="Next"]'
    ];

    const nextCard = selectors
      .map((s) => document.querySelector(s))
      .find(Boolean);

    if (!nextCard) {
      console.debug("Next reel button not found.");
      return;
    }

    console.log("Scrolled to next reel");
    nextCard.click();
  }

  function registerVideo(video) {
    if (registeredVideos.has(video)) {
      return;
    }

    registeredVideos.add(video);
    video.addEventListener("ended", scrollToNextReel);
  }

  function registerVisibleVideos() {
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach(registerVideo);
  }

  // Handle SPA updates where new reel elements are inserted without full reloads.
  const observer = new MutationObserver(() => {
    registerVisibleVideos();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  if (document.readyState === "complete") {
    setTimeout(registerVisibleVideos, 2000);
  } else {
    window.addEventListener(
      "load",
      () => {
        setTimeout(registerVisibleVideos, 2000);
      },
      { once: true }
    );
  }
}
