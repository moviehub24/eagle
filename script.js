

document.addEventListener("DOMContentLoaded", () => {
    const movieInfo = document.getElementById("movie-info");
    const videoPlayer = document.getElementById("video-player");
    const closeButton = document.getElementById("close-btn");

    if (window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.expand();  // Expand app to full screen

        if (tg.initDataUnsafe && tg.initDataUnsafe.web_app_data) {
            const data = JSON.parse(tg.initDataUnsafe.web_app_data);
            const { videoId, qualityChannelId } = data;

            movieInfo.textContent = `🎥 Video ID: ${videoId} (Quality: ${qualityChannelId})`;
            videoPlayer.src = `https://cdn.example.com/videos/${videoId}.mp4`; // Replace with actual CDN URL
        } else {
            movieInfo.textContent = "No video data found!";
        }

        closeButton.addEventListener("click", () => {
            tg.close();
        });
    } else {
        movieInfo.textContent = "⚠️ Telegram WebApp not available!";
    }
});
