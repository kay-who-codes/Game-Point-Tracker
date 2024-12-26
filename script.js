// Load the click sound
const clickSound = new Audio('click.mp3');

// Add event listeners
document.getElementById('startButton').addEventListener('click', function() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const startingScore = parseInt(document.getElementById('startingScore').value);
    const playersList = document.getElementById('playersList');

    // Hide the configuration section
    document.querySelector('.config').classList.add('hidden');

    // Clear the players list
    playersList.innerHTML = '';

    // Create player list items
    for (let i = 1; i <= numPlayers; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<span>Player ${i}</span> <span class="score">${startingScore}</span>
        <button class="increment">+</button><button class="decrement">-</button>`;
        playersList.appendChild(li);
    }

    // Show the scoreboard
    document.getElementById('scoreboard').classList.remove('hidden');
});

document.getElementById('playersList').addEventListener('click', function(event) {
    if (event.target.classList.contains('increment') || event.target.classList.contains('decrement')) {
        // Play the click sound
        clickSound.play().catch(error => console.error('Error playing sound:', error));

        const scoreElement = event.target.classList.contains('increment') 
            ? event.target.previousElementSibling 
            : event.target.previousElementSibling.previousElementSibling;

        let score = parseInt(scoreElement.textContent);
        scoreElement.textContent = event.target.classList.contains('increment') ? ++score : --score;

        // Add animation class
        event.target.classList.add('clicked');

        // Remove animation class after animation ends
        setTimeout(() => {
            event.target.classList.remove('clicked');
        }, 200);
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Show the configuration section
    document.querySelector('.config').classList.remove('hidden');

    // Hide the scoreboard
    document.getElementById('scoreboard').classList.add('hidden');
});