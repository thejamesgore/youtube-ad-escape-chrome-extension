chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading' && tab.url.includes('youtube.com')) {
    const baseURL = `192.168.30.31:38912` // Change this to your base url and port for your self hosted or public youtube alternative. E.g Invidious.

    const parts = tab.url.split('.com')
    if (parts.length > 1) {
      if (parts[1].startsWith('/watch') || parts[1].startsWith('/short')) {
        chrome.tabs.create({ url: `baseURL${parts[1]}` })
      }
    }
  }
})
