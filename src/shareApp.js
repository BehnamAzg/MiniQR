export const shareApp = async function() {
  const shareData = {
    title: "MiniQR - Quick QR Code Generator",
    text: "Create QR codes instantly! Try it now:",
    url: "https://behnamazg.github.io/MiniQR"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        try {
          await navigator.clipboard.writeText(shareData.url);
          alert("Link copied to clipboard!");
        } catch (clipboardErr) {
          console.warn("Clipboard failed", clipboardErr);
        }
      }
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    } catch {
      prompt("Copy this link:", shareData.url);
    }
  }
}