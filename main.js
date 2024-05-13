//rolls for random amount of players between 2 and 10
const playersAtTable = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomPlayersIndex = Math.floor(Math.random() * playersAtTable.length);
const randomPlayers = playersAtTable[randomPlayersIndex];

//rolls for random betting type to simulate players placing varied bets
const betTypes = ["1num", "2num", "4num", "5num", "6num", "12num", "18num"];
const randomBetTypeIndex = Math.floor(Math.random() * betTypes.length);
const randomBetType = betTypes[randomBetTypeIndex];

//map of betting types and their corresponding win-rates
const betOdds = {
    "1num": 0.027,
    "2num": 0.054,
    "3num": 0.081,
    "4num": 0.1081,
    "5num": 0.1351,
    "6num": 0.1621,
    "12num": 0.3243,
    "18num": 0.4865,
}



//the most disgusting thing ive ever typed
function mainLoop() {
    if (randomPlayers == 2) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
    } else if (randomPlayers == 3) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
    } else if (randomPlayers == 4) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
    } else if (randomPlayers == 5) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
        player5Result = placeYourBet();
    } else if (randomPlayers == 6) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
        player5Result = placeYourBet();
        player6Result = placeYourBet();
    } else if (randomPlayers == 7) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
        player5Result = placeYourBet();
        player6Result = placeYourBet();
        player7Result = placeYourBet();
    } else if (randomPlayers == 8) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
        player5Result = placeYourBet();
        player6Result = placeYourBet();
        player7Result = placeYourBet();
        player8Result = placeYourBet();
    } else if (randomPlayers == 9) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
        player5Result = placeYourBet();
        player6Result = placeYourBet();
        player7Result = placeYourBet();
        player8Result = placeYourBet();
        player9Result = placeYourBet();
    } else if (randomPlayers == 10) {
        player1Result = placeYourBet();
        player2Result = placeYourBet();
        player3Result = placeYourBet();
        player4Result = placeYourBet();
        player5Result = placeYourBet();
        player6Result = placeYourBet();
        player7Result = placeYourBet();
        player8Result = placeYourBet();
        player9Result = placeYourBet();
        player10Result = placeYourBet();
    }
}


// compares the bet type win rate to a randomly generated number
function placeYourBet() {
    let toBeatRaw = Math.random();
    let toBeatRounded = toBeatRaw.toFixed(4);
    let betWins = false;
    let betType = randomBetType;
    const ourBet = betOdds[betType];

    if (ourBet > toBeatRounded) {
        betWins = true;
    } else {
        betWins = false;
    }

    
    // console.log("DEBUG INFO:");
    console.log("Bet Wins?", betWins);
    // console.log("To Beat:", toBeatRounded);
    // console.log("Our bet: ", ourBet);
    // console.log("bet type: ", betType);

    return betWins;

    
}

function spinWheel(min = 0, max = 38) {
    let spinResult = Math.floor(Math.random() * (max - min + 1)+ min);
    const red = [1,3,5,7,9,12,14,16,19,21,23,25,27,30,32,34,36]
    
    if (red.includes(spinResult)) {
        console.log(spinResult + " Red")
        return (spinResult + " Red")  
    } else {
        console.log(spinResult + " Black")
        return (spinResult + " Black")
    }


}
spinWheel();
mainLoop();
