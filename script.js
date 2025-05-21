document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded fired. Script execution started.");
    const playerCard = document.getElementById('player-card');
    const playerName = document.getElementById('player-name');
    const playerPosition = document.getElementById('player-position');
    const playerNumber = document.getElementById('player-number');

    // Get references to the new elements
    const playerHeight = document.getElementById('player-height');
    const playerWeight = document.getElementById('player-weight');
    const playerAge = document.getElementById('player-age');
    const playerExperience = document.getElementById('player-experience');
    const playerCollege = document.getElementById('player-college');
    const lottieContainer = document.getElementById('lottie-container');
    const backgroundMusic = document.getElementById('background-music');

    // Get references to the new spin and stop buttons
    const spinButton = document.getElementById('spin-button');
    const stopButton = document.getElementById('stop-button');

    // Manually extracted player data (subset from the provided roster)
    const players = [
        {
            "name": "Nick Allegretti",
            "number": "67",
            "position": "G",
            "height": "6-4",
            "weight": "320",
            "age": "29",
            "experience": "7",
            "college": "Illinois",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/nick-allegretti.png"
        },
        {
            "name": "Kazmeir Allen",
            "number": "31",
            "position": "RB",
            "height": "5-8",
            "weight": "176",
            "age": "25",
            "experience": "1",
            "college": "UCLA",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/kazmeir-allen.png"
        },
        {
            "name": "Dorance Armstrong",
            "number": "92",
            "position": "DE",
            "height": "6-4",
            "weight": "255",
            "age": "27",
            "experience": "8",
            "college": "Kansas",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/dorance-armstrong.png"
        },
        {
            "name": "John Bates",
            "number": "87",
            "position": "TE",
            "height": "6-6",
            "weight": "259",
            "age": "27",
            "experience": "5",
            "college": "Boise State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/john-bates.png"
        },
        {
            "name": "Nick Bellore",
            "number": "57",
            "position": "LB",
            "height": "6-1",
            "weight": "250",
            "age": "36",
            "experience": "15",
            "college": "Central Michigan",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/nick-bellore.png"
        },
        {
            "name": "Tyler Biadasz",
            "number": "63",
            "position": "C",
            "height": "6-4",
            "weight": "318",
            "age": "27",
            "experience": "6",
            "college": "Wisconsin",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/tyler-biadasz.png"
        },
        {
            "name": "Noah Brown",
            "number": "85",
            "position": "WR",
            "height": "6-2",
            "weight": "225",
            "age": "29",
            "experience": "9",
            "college": "Ohio State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/noah-brown.png"
        },
        {
            "name": "Percy Butler",
            "number": "35",
            "position": "S",
            "height": "6-0",
            "weight": "191",
            "age": "25",
            "experience": "4",
            "college": "Louisiana",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/percy-butler.png"
        },
        {
            "name": "Brandon Coleman",
            "number": "74",
            "position": "T",
            "height": "6-6",
            "weight": "320",
            "age": "24",
            "experience": "2",
            "college": "TCU",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/brandon-coleman.png"
        },
        {
            "name": "Sam Cosmi",
            "number": "76",
            "position": "G",
            "height": "6-6",
            "weight": "309",
            "age": "26",
            "experience": "5",
            "college": "Texas",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/sam-cosmi.png"
        },
        {
            "name": "Jayden Daniels",
            "number": "5",
            "position": "QB",
            "height": "6-4",
            "weight": "210",
            "age": "24",
            "experience": "2",
            "college": "LSU",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/jayden-daniels.png"
        },
        {
            "name": "Sheldon Day",
            "number": "64",
            "position": "DT",
            "height": "6-1",
            "weight": "285",
            "age": "30",
            "experience": "9",
            "college": "Notre Dame",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/sheldon-day.png"
        },
        {
            "name": "Michael Deiter",
            "number": "60",
            "position": "G",
            "height": "6-6",
            "weight": "310",
            "age": "28",
            "experience": "7",
            "college": "Wisconsin",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/michael-deiter.png"
        },
        {
            "name": "Austin Ekeler",
            "number": "30",
            "position": "RB",
            "height": "5-9",
            "weight": "200",
            "age": "30",
            "experience": "9",
            "college": "Western State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/austin-ekeler.png"
        },
        {
            "name": "Zach Ertz",
            "number": "86",
            "position": "TE",
            "height": "6-5",
            "weight": "250",
            "age": "34",
            "experience": "13",
            "college": "Stanford",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/zach-ertz.png"
        },
        {
            "name": "Viliami Fehoko Jr.",
            "number": "72",
            "position": "DE",
            "height": "6-4",
            "weight": "267",
            "age": "25",
            "experience": "2",
            "college": "San Jose State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/viliami-fehoko-jr.png"
        },
        {
            "name": "Clelin Ferrell",
            "number": "99",
            "position": "DE",
            "height": "6-4",
            "weight": "265",
            "age": "28",
            "experience": "7",
            "college": "Clemson",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/clelin-ferrell.png"
        },
        {
            "name": "Matt Gay",
            "number": "16",
            "position": "K",
            "height": "6-0",
            "weight": "232",
            "age": "31",
            "experience": "7",
            "college": "Utah",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/matt-gay.png"
        },
        {
            "name": "Eddie Goldman",
            "number": "97",
            "position": "DT",
            "height": "6-3",
            "weight": "332",
            "age": "31",
            "experience": "8",
            "college": "Florida State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/eddie-goldman.png"
        },
        {
            "name": "Julian Good-Jones",
            "number": "61",
            "position": "G",
            "height": "6-5",
            "weight": "313",
            "age": "28",
            "experience": "2",
            "college": "Iowa State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/julian-good-jones.png"
        },
        {
            "name": "Dominique Hampton",
            "number": "45",
            "position": "S",
            "height": "6-3",
            "weight": "220",
            "age": "24",
            "experience": "2",
            "college": "Washington",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/dominique-hampton.png"
        },
        {
            "name": "Will Harris",
            "number": "3",
            "position": "FS",
            "height": "6-1",
            "weight": "207",
            "age": "29",
            "experience": "7",
            "college": "Boston College",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/will-harris.png"
        },
        {
            "name": "Terry McLaurin",
            "number": "17",
            "position": "WR",
            "height": "6-0",
            "weight": "210",
            "age": "29",
            "experience": "6",
            "college": "Ohio State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/terry-mclaurin.png"
        },
        {
            "name": "Jonathan Allen",
            "number": "93",
            "position": "DT",
            "height": "6-3",
            "weight": "300",
            "age": "29",
            "experience": "8",
            "college": "Alabama",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/jonathan-allen.png"
        },
        {
            "name": "Daron Payne",
            "number": "94",
            "position": "DT",
            "height": "6-3",
            "weight": "311",
            "age": "27",
            "experience": "7",
            "college": "Alabama",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/daron-payne.png"
        },
        {
            "name": "Kendall Fuller",
            "number": "29",
            "position": "CB",
            "height": "5-11",
            "weight": "198",
            "age": "29",
            "experience": "9",
            "college": "Virginia Tech",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/kendall-fuller.png"
        },
        {
            "name": "Ben Sinnott",
            "number": "82",
            "position": "TE",
            "height": "6-4",
            "weight": "247",
            "age": "22",
            "experience": "2",
            "college": "Kansas State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/ben-sinnott.png"
        },
        {
            "name": "Cole Turner",
            "number": "88",
            "position": "TE",
            "height": "6-6",
            "weight": "240",
            "age": "25",
            "experience": "3",
            "college": "Nevada",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/cole-turner.png"
        },
        {
            "name": "Bobby Wagner",
            "number": "54",
            "position": "LB",
            "height": "6-0",
            "weight": "241",
            "age": "34",
            "experience": "14",
            "college": "Utah State",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/bobby-wagner.png"
        },
        {
            "name": "Tress Way",
            "number": "10",
            "position": "P",
            "height": "6-1",
            "weight": "220",
            "age": "35",
            "experience": "12",
            "college": "Oklahoma",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/tress-way.png"
        },
        {
            "name": "Michael Wiley",
            "number": "34",
            "position": "RB",
            "height": "5-10",
            "weight": "209",
            "age": "23",
            "experience": "1",
            "college": "Arizona",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/michael-wiley.png"
        },
        {
            "name": "Deatrich Wise",
            "number": "91",
            "position": "DT",
            "height": "6-5",
            "weight": "271",
            "age": "30",
            "experience": "9",
            "college": "Arkansas",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/deatrich-wise.png"
        },
        {
            "name": "Andrew Wylie",
            "number": "71",
            "position": "G/T",
            "height": "6-6",
            "weight": "309",
            "age": "30",
            "experience": "8",
            "college": "Eastern Michigan",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/andrew-wylie.png"
        },
        {
            "name": "Colson Yankoff",
            "number": "41",
            "position": "TE",
            "height": "6-4",
            "weight": "225",
            "age": "25",
            "experience": "2",
            "college": "UCLA",
            "image": "https://static.clubs.nfl.com/image/private/t_headshot_desktop/commanders/players/headshots/colson-yankoff.png"
        }
    ];

    // Load Lottie animation directly. Lottie handles asynchronous loading.
    const lottieAnimation = lottie.loadAnimation({
        container: lottieContainer, // the dom element that will contain the animation
        renderer: 'svg', // or 'canvas' or 'html'
        loop: false, // As per the request, the firework should not loop indefinitely
        autoplay: false, // We will control playback manually
        path: 'firework.json' // the path to the animation json
    });

    console.log("Lottie animation object created:", lottieAnimation);

    // Hide Lottie container when animation is complete
    lottieAnimation.addEventListener('complete', () => {
        console.log("Lottie animation complete.");
        lottieContainer.style.visibility = 'hidden';
    });

    // Add error listener for Lottie animation
    lottieAnimation.addEventListener('error', (error) => {
        console.error("Lottie animation error:", error);
    });

    // Listen for data ready to confirm animation is fully loaded
    lottieAnimation.addEventListener('data_ready', () => {
        console.log("Lottie animation data is ready (main listener).");
    });

    let spinningInterval;
    let finalRandomPlayer;

    // Add event listener for the Spin button
    spinButton.addEventListener('click', () => {
        // Disable the spin button and show the stop button
        spinButton.disabled = true;
        spinButton.classList.add('hidden');
        stopButton.classList.remove('hidden');
        stopButton.disabled = false;

        // Pause background music if playing
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
        }

        // Hide Lottie container if visible and stop animation
        if (lottieContainer.style.visibility !== 'hidden' && lottieAnimation) {
            lottieContainer.style.visibility = 'hidden';
            lottieAnimation.stop();
        }

        // Get the final random player once at the start of the spin
        const finalRandomIndex = Math.floor(Math.random() * players.length);
        finalRandomPlayer = players[finalRandomIndex];

        // Define the duration of the spin animation (in milliseconds)
        const spinDuration = 2000; // 2 seconds

        // Define the interval for changing players during the spin (in milliseconds)
        const spinInterval = 50; // Change player every 50ms

        let spinCounter = 0;
        const totalSpins = spinDuration / spinInterval;

        spinningInterval = setInterval(() => {
            // Get a random player for the spinning effect
            const randomIndex = Math.floor(Math.random() * players.length);
            const randomPlayer = players[randomIndex];

            // Update the player card with the spinning player's information
            playerName.textContent = randomPlayer.name;
            playerPosition.textContent = `Position: ${randomPlayer.position}`;
            playerNumber.textContent = `#${randomPlayer.number}`;

            // Optionally update other fields for the spinning effect
            playerHeight.textContent = `Height: ${randomPlayer.height}`;
            playerWeight.textContent = `Weight: ${randomPlayer.weight}`;
            playerAge.textContent = `Age: ${randomPlayer.age}`;
            playerExperience.textContent = `Experience: ${randomPlayer.experience}`;
            playerCollege.textContent = `College: ${randomPlayer.college}`;

            // Display player image during spin (optional, might be too fast)
            const playerImageDiv = playerCard.querySelector('.player-image');
            if (randomPlayer.image) {
                playerImageDiv.style.backgroundImage = `url('${randomPlayer.image}')`;
            } else {
                playerImageDiv.style.backgroundImage = '';
            }

            spinCounter++;

            // Auto-stop the spin after the duration as a fallback
            if (spinCounter >= totalSpins) {
                stopSpin(); // Call the stop function
            }
        }, spinInterval);
    });

    // Add event listener for the Stop button
    stopButton.addEventListener('click', () => {
        stopSpin(); // Call the stop function
    });

    // Function to stop the spin and display the final result
    function stopSpin() {
        console.log("stopSpin function called.");
        clearInterval(spinningInterval);

        // Update the player card with the final random player's information
        playerName.textContent = finalRandomPlayer.name;
        playerPosition.textContent = `Position: ${finalRandomPlayer.position}`;
        playerNumber.textContent = `#${finalRandomPlayer.number}`;

        // Update the new fields for the final player
        playerHeight.textContent = `Height: ${finalRandomPlayer.height}`;
        playerWeight.textContent = `Weight: ${finalRandomPlayer.weight}`;
        playerAge.textContent = `Age: ${finalRandomPlayer.age}`;
        playerExperience.textContent = `Experience: ${finalRandomPlayer.experience}`;
        playerCollege.textContent = `College: ${finalRandomPlayer.college}`;

        // Display final player image
        const playerImageDiv = playerCard.querySelector('.player-image');
        if (finalRandomPlayer.image) {
            playerImageDiv.style.backgroundImage = `url('${finalRandomPlayer.image}')`;
        } else {
            playerImageDiv.style.backgroundImage = '';
        }

        // Show the spin button and hide the stop button
        spinButton.disabled = false;
        spinButton.classList.remove('hidden');
        stopButton.classList.add('hidden');
        stopButton.disabled = true;

        // Show and play Lottie animation if available and loaded
        if (lottieAnimation && lottieAnimation.isLoaded) {
            lottieContainer.style.visibility = 'visible';
            console.log("Spin complete. Attempting to play Lottie animation...");
            // Stop any existing animation and reset to the beginning
            lottieAnimation.stop();
            lottieAnimation.goToFrame(0, true);
            lottieAnimation.play();
        } else if (lottieAnimation && !lottieAnimation.isLoaded) {
             console.log("Lottie animation object exists but not loaded when stop clicked.", { isLoaded: lottieAnimation?.isLoaded });
             // Optional: try playing anyway, Lottie might queue it
             // lottieAnimation.play();
        } else {
            console.log("Lottie animation object not found.");
        }

        // Play background music
        console.log("Attempting to play background music...");
        if (backgroundMusic) {
             // Reset music to the beginning before playing
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
        } else {
            console.log("Background music audio element not found.");
        }
    }
}); 