document.addEventListener("DOMContentLoaded", () => {
    const movieInfo = document.getElementById("movie-info");
    const videoPlayer = document.getElementById("video-player");
    const closeButton = document.getElementById("close-btn");

    if (window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.expand();

        console.log("Telegram Web App Data:", tg.initDataUnsafe); // Debugging

        if (tg.initDataUnsafe && tg.initDataUnsafe.web_app_data) {
            const data = JSON.parse(tg.initDataUnsafe.web_app_data);
            console.log("Received Data:", data); // Debugging

            if (data.videoId && data.qualityChannelId) {
                movieInfo.textContent = `🎥 Video ID: ${data.videoId} (Quality: ${data.qualityChannelId})`;
                videoPlayer.src = `https://cdn.example.com/videos/${data.videoId}.mp4`; // Update with actual URL
                videoPlayer.style.display = "block";
            } else {
                movieInfo.textContent = "⚠️ Missing video data!";
            }
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
