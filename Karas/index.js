

let playerMoney = 0;
let kofas = 1;
let deck;
let ranka;

let korta;

let pirmaKorta;
let recentValue;

let gameOver = false;

window.onload = function()
{
    buildDeck();
    shuffleDeck();
    firstCard();
}

function buildDeck()
{
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["H"];
    
    deck = [];

    for(let i = 0; i < 4; i++)
    {
        for(let j = 0; j < values.length; j++)
        {
            deck.push(values[j] + "-" + types[0]);
        }
    }
}

function shuffleDeck()
{
    for(let i = 0; i < deck.length; i++)
    {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    console.log(deck);
}

function firstCard()
{
    let cardImg = document.createElement("img");
    pirmaKorta = deck.pop();
    cardImg.src = "./cards/" + pirmaKorta + ".jpg";
    document.getElementById("cards-container").append(cardImg);

    recentValue = getValue(pirmaKorta);
}

function inputas()
{
    let temp = document.getElementById("textbox");
    playerMoney = Number(textbox.value);

    document.getElementById("more-equal").addEventListener("click", more);
    document.getElementById("less-equal").addEventListener("click", less);
    document.getElementById("reset").addEventListener("click", reset);
}

function reset()
{
    location.reload();
}

function zaidimasBaigtas()
{
    window.alert("Pralaimejai duhas")
    document.getElementById("player-profit").textContent = "0";
}

function more()
{
    let cardImg = document.createElement("img");
    pirmaKorta = deck.pop();
    cardImg.src = "./cards/" + pirmaKorta + ".jpg";
    document.getElementById("cards-container").append(cardImg);

    ranka = "more";

    korta = getValue(pirmaKorta);

    console.log(korta);

    recentValue = checkNiggaMore(korta, recentValue, gameOver);

    if(recentValue != 0)
    {
        const odds = kofEngine(korta, deck);

        console.log(recentValue);

        yourWinnings(playerMoney, odds);
    }

}

function less()
{

    let cardImg = document.createElement("img");
    pirmaKorta = deck.pop();
    cardImg.src = "./cards/" + pirmaKorta + ".jpg";
    document.getElementById("cards-container").append(cardImg);

    ranka = "less";

    korta = getValue(pirmaKorta);

    console.log(korta);

    checkNiggaLess(korta, recentValue, gameOver);

    if(recentValue != 0)
    {
        const odds = kofEngine(korta, deck);

        yourWinnings(playerMoney, odds);
    }
}

function yourWinnings(playerMoney, odds)
{
    if(ranka = "more")
    {
        playerMoney = playerMoney * (1 + odds.oddsHigher);
    }
    else if(ranka == "less")
    {
        playerMoney = playerMoney * (1 + odds.oddsLower);
    }

    playerMoney = parseFloat(playerMoney.toFixed(2));

    document.getElementById("player-profit").textContent = playerMoney + "$";
}

function kofEngine(korta, deck)
{

    const cardValues = 
    {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 
        'J': 11, 'Q': 12, 'K': 13, 'A': 1
    };

    let higherCount = 0;
    let lowerCount = 0;

    for(const card of deck)
    {
        const cardValue = cardValues[card.split("-")[0]];
        if(cardValue >= korta)
        {
            higherCount++;
        }
        if(cardValue <= korta)
        {
            lowerCount++;
        }

    }

    const totalRemainingCards = higherCount + lowerCount;

    const oddsHigher = higherCount / totalRemainingCards;
    const oddsLower = lowerCount / totalRemainingCards;
    

    const ratioHigher = higherCount ? parseFloat((totalRemainingCards / higherCount) / 10).toFixed(2) : 'N/A';
    const ratioLower = lowerCount ? parseFloat((totalRemainingCards / lowerCount) / 10).toFixed(2) : 'N/A';


    return {
        oddsHigher: Number(ratioHigher),
        oddsLower: Number(ratioLower)
    };
}

function checkNiggaLess(korta, recentValue, gameOver)
{
    if(korta <= recentValue)
    {
        recentValue = korta
        gameOver = false;
        return recentValue;
    }
    else
    {
        zaidimasBaigtas();
        recentValue = 0;
        return recentValue;
    }
}

function checkNiggaMore(korta, recentValue, gameOver)
{
    if(korta >= recentValue)
    {
        gameOver = false;
        recentValue = korta
        return recentValue;
    }
    else
    {
       zaidimasBaigtas();
       recentValue = 0;
       return recentValue;
    }
}

function getValue(pirmaKorta) 
{
    const cardValues = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 
        'J': 11, 'Q': 12, 'K': 13, 'A': 1
    };
    const value = pirmaKorta.split("-")[0];
    return cardValues[value];
}