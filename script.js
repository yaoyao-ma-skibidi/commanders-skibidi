document.addEventListener('DOMContentLoaded', () => {
    const playerCard = document.getElementById('player-card');
    const playerName = document.getElementById('player-name');
    const playerPosition = document.getElementById('player-position');
    const playerNumber = document.getElementById('player-number');
    const rouletteButton = document.getElementById('roulette-button');

    // Get references to the new elements
    const playerHeight = document.getElementById('player-height');
    const playerWeight = document.getElementById('player-weight');
    const playerAge = document.getElementById('player-age');
    const playerExperience = document.getElementById('player-experience');
    const playerCollege = document.getElementById('player-college');

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
            "college": "Illinois"
        },
        {
            "name": "Kazmeir Allen",
            "number": "31",
            "position": "RB",
            "height": "5-8",
            "weight": "176",
            "age": "25",
            "experience": "1",
            "college": "UCLA"
        },
        {
            "name": "Dorance Armstrong",
            "number": "92",
            "position": "DE",
            "height": "6-4",
            "weight": "255",
            "age": "27",
            "experience": "8",
            "college": "Kansas"
        },
        {
            "name": "John Bates",
            "number": "87",
            "position": "TE",
            "height": "6-6",
            "weight": "259",
            "age": "27",
            "experience": "5",
            "college": "Boise State"
        },
        {
            "name": "Nick Bellore",
            "number": "57",
            "position": "LB",
            "height": "6-1",
            "weight": "250",
            "age": "36",
            "experience": "15",
            "college": "Central Michigan"
        },
        {
            "name": "Tyler Biadasz",
            "number": "63",
            "position": "C",
            "height": "6-4",
            "weight": "318",
            "age": "27",
            "experience": "6",
            "college": "Wisconsin"
        },
        {
            "name": "Noah Brown",
            "number": "85",
            "position": "WR",
            "height": "6-2",
            "weight": "225",
            "age": "29",
            "experience": "9",
            "college": "Ohio State"
        },
        {
            "name": "Percy Butler",
            "number": "35",
            "position": "S",
            "height": "6-0",
            "weight": "191",
            "age": "25",
            "experience": "4",
            "college": "Louisiana"
        },
        {
            "name": "Brandon Coleman",
            "number": "74",
            "position": "T",
            "height": "6-6",
            "weight": "320",
            "age": "24",
            "experience": "2",
            "college": "TCU"
        },
        {
            "name": "Sam Cosmi",
            "number": "76",
            "position": "G",
            "height": "6-6",
            "weight": "309",
            "age": "26",
            "experience": "5",
            "college": "Texas"
        },
        {
            "name": "Jayden Daniels",
            "number": "5",
            "position": "QB",
            "height": "6-4",
            "weight": "210",
            "age": "24",
            "experience": "2",
            "college": "LSU"
        },
        {
            "name": "Sheldon Day",
            "number": "64",
            "position": "DT",
            "height": "6-1",
            "weight": "285",
            "age": "30",
            "experience": "9",
            "college": "Notre Dame"
        },
        {
            "name": "Michael Deiter",
            "number": "60",
            "position": "G",
            "height": "6-6",
            "weight": "310",
            "age": "28",
            "experience": "7",
            "college": "Wisconsin"
        },
        {
            "name": "Austin Ekeler",
            "number": "30",
            "position": "RB",
            "height": "5-9",
            "weight": "200",
            "age": "30",
            "experience": "9",
            "college": "Western State"
        },
        {
            "name": "Zach Ertz",
            "number": "86",
            "position": "TE",
            "height": "6-5",
            "weight": "250",
            "age": "34",
            "experience": "13",
            "college": "Stanford"
        },
        {
            "name": "Viliami Fehoko Jr.",
            "number": "72",
            "position": "DE",
            "height": "6-4",
            "weight": "267",
            "age": "25",
            "experience": "2",
            "college": "San Jose State"
        },
        {
            "name": "Clelin Ferrell",
            "number": "99",
            "position": "DE",
            "height": "6-4",
            "weight": "265",
            "age": "28",
            "experience": "7",
            "college": "Clemson"
        },
        {
            "name": "Matt Gay",
            "number": "16",
            "position": "K",
            "height": "6-0",
            "weight": "232",
            "age": "31",
            "experience": "7",
            "college": "Utah"
        },
        {
            "name": "Eddie Goldman",
            "number": "97",
            "position": "DT",
            "height": "6-3",
            "weight": "332",
            "age": "31",
            "experience": "8",
            "college": "Florida State"
        },
        {
            "name": "Julian Good-Jones",
            "number": "61",
            "position": "G",
            "height": "6-5",
            "weight": "313",
            "age": "28",
            "experience": "2",
            "college": "Iowa State"
        },
        {
            "name": "Dominique Hampton",
            "number": "45",
            "position": "S",
            "height": "6-3",
            "weight": "220",
            "age": "24",
            "experience": "2",
            "college": "Washington"
        },
        {
            "name": "Will Harris",
            "number": "3",
            "position": "FS",
            "height": "6-1",
            "weight": "207",
            "age": "29",
            "experience": "7",
            "college": "Boston College"
        },
        {
            "name": "Terry McLaurin",
            "number": "17",
            "position": "WR",
            "height": "6-0",
            "weight": "210",
            "age": "29",
            "experience": "6",
            "college": "Ohio State"
        },
        {
            "name": "Jonathan Allen",
            "number": "93",
            "position": "DT",
            "height": "6-3",
            "weight": "300",
            "age": "29",
            "experience": "8",
            "college": "Alabama"
        },
        {
            "name": "Daron Payne",
            "number": "94",
            "position": "DT",
            "height": "6-3",
            "weight": "311",
            "age": "27",
            "experience": "7",
            "college": "Alabama"
        },
        {
            "name": "Kendall Fuller",
            "number": "29",
            "position": "CB",
            "height": "5-11",
            "weight": "198",
            "age": "29",
            "experience": "9",
            "college": "Virginia Tech"
        },
        {
            "name": "Ben Sinnott",
            "number": "82",
            "position": "TE",
            "height": "6-4",
            "weight": "247",
            "age": "22",
            "experience": "2",
            "college": "Kansas State"
        },
        {
            "name": "Cole Turner",
            "number": "88",
            "position": "TE",
            "height": "6-6",
            "weight": "240",
            "age": "25",
            "experience": "3",
            "college": "Nevada"
        },
        {
            "name": "Bobby Wagner",
            "number": "54",
            "position": "LB",
            "height": "6-0",
            "weight": "241",
            "age": "34",
            "experience": "14",
            "college": "Utah State"
        },
        {
            "name": "Tress Way",
            "number": "10",
            "position": "P",
            "height": "6-1",
            "weight": "220",
            "age": "35",
            "experience": "12",
            "college": "Oklahoma"
        },
        {
            "name": "Michael Wiley",
            "number": "34",
            "position": "RB",
            "height": "5-10",
            "weight": "209",
            "age": "23",
            "experience": "1",
            "college": "Arizona"
        },
        {
            "name": "Deatrich Wise",
            "number": "91",
            "position": "DT",
            "height": "6-5",
            "weight": "271",
            "age": "30",
            "experience": "9",
            "college": "Arkansas"
        },
        {
            "name": "Andrew Wylie",
            "number": "71",
            "position": "G/T",
            "height": "6-6",
            "weight": "309",
            "age": "30",
            "experience": "8",
            "college": "Eastern Michigan"
        },
        {
            "name": "Colson Yankoff",
            "number": "41",
            "position": "TE",
            "height": "6-4",
            "weight": "225",
            "age": "25",
            "experience": "2",
            "college": "UCLA"
        }
    ];

    rouletteButton.addEventListener('click', () => {
        // Get a random player from the array
        const randomIndex = Math.floor(Math.random() * players.length);
        const randomPlayer = players[randomIndex];

        // Update the player card with the random player's information
        playerName.textContent = randomPlayer.name;
        playerPosition.textContent = `Position: ${randomPlayer.position}`;
        playerNumber.textContent = `#${randomPlayer.number}`;

        // Update the new fields
        playerHeight.textContent = `Height: ${randomPlayer.height}`;
        playerWeight.textContent = `Weight: ${randomPlayer.weight}`;
        playerAge.textContent = `Age: ${randomPlayer.age}`;
        playerExperience.textContent = `Experience: ${randomPlayer.experience}`;
        playerCollege.textContent = `College: ${randomPlayer.college}`;

        // Optional: Add logic to display a player image if you have image URLs in your player objects
        // const playerImageDiv = playerCard.querySelector('.player-image');
        // playerImageDiv.style.backgroundImage = `url('${randomPlayer.imageUrl}')`;
    });
}); 