const mintForm = document.querySelector('#mint-form');
const coinWrapper = document.querySelector('.coin-wrapper');
const coinTotalEl = document.querySelector('.coin-total');
let coinTotal = 0;

/**
 * create a coin, depending on type passed
 */ 
function createCoin(type) {
    const coin = document.createElement('div');
    coin.classList.add('coin', type);
    const coinPara = document.createElement('p');
    coinPara.innerText = type;
    coin.appendChild(coinPara);
    updateCoinTotal(type);
    return coin;
}

/**
 * update the total display based on the coins on the page
 */ 
function updateCoinTotal(type, increment = true) {
    if (increment) {
        if (type === 'quarter') {
            coinTotal += 25;
        } else if (type === 'dime') {
            coinTotal += 10;
        } else if (type === 'nickel') {
            coinTotal += 5;
        } else {
            coinTotal += 1;
        }
    } else {
        if (type === 'quarter') {
            coinTotal -= 25;
        } else if (type === 'dime') {
            coinTotal -= 10;
        } else if (type === 'nickel') {
            coinTotal -= 5;
        } else {
            coinTotal -= 1;
        }
    }
    coinTotalEl.innerText = `$${coinTotal/100}`;
}

/**
 * form submit handler
 */ 
mintForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);s

    for (let i = 0; i < formData.get('amount'); i++) {

        const newCoin = createCoin(formData.get('type'));
        coinWrapper.appendChild(newCoin);
    }
})

/**
 * handler to remove the clicked coin
 */ 
coinWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('coin')) {
        event.target.remove();
        updateCoinTotal(event.target.classList[1], false);
    }
})