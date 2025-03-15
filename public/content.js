chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTranscript') {
      const transcript = getTranscriptFromPage();
      sendResponse({ transcript });
    }
  });
  
  function getTranscriptFromPage() {
    // Example: Replace this with actual logic to fetch the YouTube transcript
    return "This is a sample transcript.";
  }
  