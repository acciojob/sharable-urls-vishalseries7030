// your code here
const form = document.getElementById("form");
        const nameInput = document.getElementById("name");
        const yearInput = document.getElementById("year");
        const urlHeading = document.getElementById("url");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // prevent page reload

            const name = nameInput.value.trim();
            const year = yearInput.value.trim();

            let baseURL = "https://localhost:8080/";
            let queryParams = [];

            if (name) {
                queryParams.push(`name=${name}`);
            }

            if (year) {
                queryParams.push(`year=${year}`);
            }

            if (queryParams.length > 0) {
                baseURL += "?" + queryParams.join("&");
            }

            urlHeading.textContent = baseURL;
        });
