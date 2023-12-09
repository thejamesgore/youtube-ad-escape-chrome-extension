# youtube-ad-escape-chrome-extension

Youtube adverts, tracking, and the UI is a pain in the arse. This chrome extension is simple way to never deal with a YouTube advert even if you forget to avoid navigating to YouTube.

All it does is check if you're on YouTube.com and redirect to a sanitised version of the link you've just clicked.

You can use the youtube alternative of your choosing or self host a YouTube alternative such as Invidous.

## How To Install

1.  Clone this repo and extract to a folder of your choosing where this code will live for the foreseeable future.
2.  Change the `baseURL` in the background.js file of this repo to be the YouTube alternative of your choosing.
3.  Open your Chromium base web browser, go to `Extentions`, click `Developer mode`, click `Load unpacked`
4.  Navigate to where this repo lives and click load.

Thats it! Now when you use YouTube and click on a link it will automatically open up a new tab of the video ad free, tracker free.
