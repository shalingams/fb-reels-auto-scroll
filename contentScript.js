function autoScrollReels() {
  const videoElements = document.querySelectorAll("video");

  videoElements.forEach((video) => {
    video.addEventListener("ended", () => {
      // Scroll to the next reel when the video ends
      var nextCard = document.querySelector('[aria-label="Next Card"]');
      
      console.log("Scrolled to next reel");
      nextCard.click();
      setTimeout(autoScrollReels, 2000);
    });
  });
}

// Execute the function on page load
window.addEventListener("load", () => {
  setTimeout(autoScrollReels, 2000); // Wait 2 seconds to ensure elements are loaded
});
