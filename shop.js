let goods = [
    {
        id: 1,
        name: 'джинсы',          
        description: 'кожаные',
        sizes: [52, 54, 56, 58],
        price: 3600,
        available: true,
    },
    {
        id: 2,
        name: 'брюки',          
        description: 'полосатые',
        sizes: [54, 56, 58],
        price: 4000,
        available: true,
    },
    {
        id: 3,
        name: 'шорты',          
        description: 'укороченные',
        sizes: [52, 56, 58],
        price: 2500,
        available: false,
    },
    {
        id: 4,
        name: 'спортивные штаны',          
        description: 'адидас',
        sizes: [52, 54, 56],
        price: 2000,
        available: true,
    },
    {
        id: 5,
        name: 'колготки',          
        description: 'черные',
        sizes: [52, 54],
        price: 300,
        available: false,
    },

]

let basket = [
    
];


basket.addGood = function(goodIndex, amount) {
    this.push({
        good: goodIndex,
        amount,
    })
}

basket.delGood = function(goodIndex, amount) {
    for(let i = 0; i < this.length; ++i) {
        if (this[i].good == goodIndex) {
            if (amount >= this[i].amount) {
                this.splice(i, 1);
                return;
            } 

            this[i].amount -= amount;
        }    
    }
}

basket.clear = function() {
    this.splice(0, this.length);
}

basket.getTotal = function(goods) {
    result = {
        totalAmount: 0,
        totalSumm: 0,
    }

    for(let x of this) {
        result.totalAmount += x.amount;
        result.totalSumm += goods[x.good].price * x.amount;
    }

    return result;
}


function main(basket, goods) {
    basket.addGood(0, 5);
    basket.delGood(0, 2);
    basket.addGood(1, 4);


    console.log(basket)
    console.log(basket.getTotal(goods));
    basket.clear();
    console.log(basket.getTotal(goods));
}


main(basket, goods);