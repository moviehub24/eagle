document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("user_id");
    const movieName = urlParams.get("movie");

    document.querySelectorAll(".quality-btn").forEach((button) => {
        button.addEventListener("click", async () => {
            const quality = button.getAttribute("data-quality");

            try {
                const response = await fetch("https://yourdomain.com/api/selection", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId, movieName, quality }),
                });

                if (response.ok) {
                    // 🔹 Automatically Redirect Without Prompt
                    window.location.href = `tg://resolve?domain=your_bot&start=${movieName}_${quality}`;

                    
                    // Optional: If using a web URL instead
                    // window.location.href = `https://yourmoviehost.com/watch?movie=${movieName}&quality=${quality}`;
                } else {
                    alert("Error sending request.");
                }
            } catch (error) {
                console.error("Request failed:", error);
                alert("Network error.");
            }
        });
    });
});
