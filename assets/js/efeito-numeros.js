
function startCounting(targetNumber, duration, counterId, prefix, suffix) {
    let currentNumber = 0;
    const counterElement = document.getElementById(counterId);
    const interval = Math.floor(duration / targetNumber);

    function updateCounter() {
        if (currentNumber <= targetNumber) {
            counterElement.textContent = `${prefix}${currentNumber}${suffix}`;
            currentNumber++;
            setTimeout(updateCounter, interval);
        }
    }

    updateCounter();
}

// Chame a função startCounting para os exemplos específicos
startCounting(50, 2000, 'counter1', '+', ' mil');
startCounting(75, 3000, 'counter2', '', ''); // Sem prefixo e sufixo para o exemplo 2
startCounting(100, 4000, 'counter3', '+', ' mil');
startCounting(25, 1500, 'counter4', '', ''); // Sem prefixo e sufixo para o exemplo 4
startCounting(120, 2500, 'counter5', '', ' mil');
startCounting(90, 3500, 'counter6', '+', ' mil');
