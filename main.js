document.addEventListener('DOMContentLoaded', () =>{

    const card = [
        //20 ci
        {srcImg:"img/beer.png", name:'beer'},
        {srcImg:"img/bread.png", name:'bread'},
        {srcImg:"img/burger.png", name:'burger'},
        {srcImg:"img/chicken.png", name:'chicken'},
        {srcImg:"img/coockie.png", name:'coockie'},
        {srcImg:"img/cupcake.png", name:'cupcake'},
        {srcImg:"img/donut.png", name:'donut'},
        {srcImg:"img/flan.png", name:'flan'},
        {srcImg:"img/fried-egg.png", name:'fried-egg'},
        {srcImg:"img/hotdog.png", name:'hotdog'},
        {srcImg:"img/ice-cream.png", name:'ice-cream'},
        {srcImg:"img/croissant.png", name:'croissant'},
        {srcImg:"img/milk.png", name:'milk'},
        {srcImg:"img/pizza.png", name:'pizza'},
        {srcImg:"img/popcorn.png", name:'popcorn'},
        {srcImg:"img/ramen.png", name:'ramen'},
        {srcImg:"img/sandwich.png", name:'sandwich'},
        {srcImg:"img/sushi.png", name:'sushi'},
        {srcImg:"img/tacos.png", name:'tacos'},
        {srcImg:"img/pancakes.png", name:'pancakes'},
        //repeat is
        {srcImg:"img/beer.png", name:'beer'},
        {srcImg:"img/bread.png", name:'bread'},
        {srcImg:"img/burger.png", name:'burger'},
        {srcImg:"img/chicken.png", name:'chicken'},
        {srcImg:"img/coockie.png", name:'coockie'},
        {srcImg:"img/cupcake.png", name:'cupcake'},
        {srcImg:"img/donut.png", name:'donut'},
        {srcImg:"img/flan.png", name:'flan'},
        {srcImg:"img/fried-egg.png", name:'fried-egg'},
        {srcImg:"img/hotdog.png", name:'hotdog'},
        {srcImg:"img/ice-cream.png", name:'ice-cream'},
        {srcImg:"img/croissant.png", name:'croissant'},
        {srcImg:"img/milk.png", name:'milk'},
        {srcImg:"img/pizza.png", name:'pizza'},
        {srcImg:"img/popcorn.png", name:'popcorn'},
        {srcImg:"img/ramen.png", name:'ramen'},
        {srcImg:"img/sandwich.png", name:'sandwich'},
        {srcImg:"img/sushi.png", name:'sushi'},
        {srcImg:"img/tacos.png", name:'tacos'},
        {srcImg:"img/pancakes.png", name:'pancakes'},
    ]
    //array card random...
    card.sort(()=>Math.random() - 0.5);

    const containerCard = document.querySelector(".div-container-card");
    const result = document.querySelector('#result');
    arrayCardWon = [];
    arrayCardId = [];
    arrayChosen = [];

    function printCards() {
        for (let i = 0; i < card.length; i++) {
            const srcImgCard = document.createElement("img");
            srcImgCard.setAttribute('src', 'img/chef.png');
            srcImgCard.setAttribute('idCard', i);
            srcImgCard.addEventListener('click', flipCard)
    
            containerCard.appendChild(srcImgCard);
        }
    }

    function check(){
        const cards = document.querySelectorAll('img');
        const cardOne = arrayCardId[0];
        const cardTwo = arrayCardId[1];

        if (arrayChosen[0] === arrayChosen[1]){
            cards[cardOne].removeEventListener('click', flipCard);
            cards[cardTwo].removeEventListener('click', flipCard);
            arrayCardWon.push(arrayChosen);
        }else{
            cards[cardOne].setAttribute('src', 'img/chef.png');
            cards[cardTwo].setAttribute('src', 'img/chef.png');
        }
        arrayChosen = [];
        arrayCardId = [];
        result.textContent = arrayCardWon.length;
        if (arrayCardWon.length === card.length/2) {
            result.textContent = "Congrulations!!";
        }
    }
    
    function flipCard(){
        let cardId = this.getAttribute('idCard');
        arrayChosen.push(card[cardId].name);
        arrayCardId.push(cardId);
        this.setAttribute('src', card[cardId].srcImg);
        if (arrayChosen.length === 2) {
            setTimeout(check, 500);
        }
    }
    
    printCards();
})
