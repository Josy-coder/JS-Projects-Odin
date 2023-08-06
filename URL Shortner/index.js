async function shortenUrl() {
    const urlInput = document.getElementById("urlInput");
    const originalUrl = urlInput.value;
  
    if (originalUrl.trim() === "") {
      alert("Please enter a valid URL.");
      return;
    }
  
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`);
      const data = await response.json();
  
      if (data.ok) {
       
        const shortenedUrl = data.result.short_link;
        alert(`Shortened URL: ${shortenedUrl}`);
        urlInput.value = ""; 
      } else {
       
        alert("Error: Unable to shorten the URL. Please try again later.");
      }
    } catch (error) {
      
      alert("Error: Unable to connect to the server. Please check your internet connection and try again.");
    }
  }
  