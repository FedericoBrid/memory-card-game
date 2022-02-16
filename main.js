document.addEventListener('DOMContentLoaded', () =>{

    const card = [
        //20 cards
        {img:"img/beer.png", name:'beer'},
        {img:"img/bread.png", name:'bread'},
        {img:"img/burger.png", name:'burger'},
        {img:"img/chicken.png", name:'chicken'},
        {img:"img/coockie.png", name:'coockie'},
        {img:"img/cupcake.png", name:'cupcake'},
        {img:"img/donut.png", name:'donut'},
        {img:"img/flan.png", name:'flan'},
        {img:"img/fried-egg.png", name:'fried-egg'},
        {img:"img/hotdog.png", name:'hotdog'},
        {img:"img/ice-cream.png", name:'ice-cream'},
        {img:"img/croissant.png", name:'croissant'},
        {img:"img/milk.png", name:'milk'},
        {img:"img/pizza.png", name:'pizza'},
        {img:"img/popcorn.png", name:'popcorn'},
        {img:"img/ramen.png", name:'ramen'},
        {img:"img/sandwich.png", name:'sandwich'},
        {img:"img/sushi.png", name:'sushi'},
        {img:"img/tacos.png", name:'tacos'},
        {img:"img/pancakes.png", name:'pancakes'},
        //repeat cards
        {img:"img/beer.png", name:'beer'},
        {img:"img/bread.png", name:'bread'},
        {img:"img/burger.png", name:'burger'},
        {img:"img/chicken.png", name:'chicken'},
        {img:"img/coockie.png", name:'coockie'},
        {img:"img/cupcake.png", name:'cupcake'},
        {img:"img/donut.png", name:'donut'},
        {img:"img/flan.png", name:'flan'},
        {img:"img/fried-egg.png", name:'fried-egg'},
        {img:"img/hotdog.png", name:'hotdog'},
        {img:"img/ice-cream.png", name:'ice-cream'},
        {img:"img/croissant.png", name:'croissant'},
        {img:"img/milk.png", name:'milk'},
        {img:"img/pizza.png", name:'pizza'},
        {img:"img/popcorn.png", name:'popcorn'},
        {img:"img/ramen.png", name:'ramen'},
        {img:"img/sandwich.png", name:'sandwich'},
        {img:"img/sushi.png", name:'sushi'},
        {img:"img/tacos.png", name:'tacos'},
        {img:"img/pancakes.png", name:'pancakes'},
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
            const imgCard = document.createElement("img");
            imgCard.setAttribute('src', 'img/chef.png');
            imgCard.setAttribute('idCard', i);
            imgCard.addEventListener('click', flipCard)
    
            containerCard.appendChild(imgCard);
        }
    }

    function check(){
        const cards = document.querySelectorAll('img');
        const cardOne = arrayCardId[0];
        const cardTwo = arrayCardId[1];

        if (cardOne == cardTwo) {
            console.log('matchhh');
            cards[cardOne].setAttribute('src', 'img/beer.png');
            cards[cardTwo].setAttribute('src', 'img/beer.png');
        }
        else if (arrayChosen[0] === arrayChosen[1]){
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
        this.setAttribute('src', card[cardId].img);
        if (arrayChosen.length === 2) {
            setTimeout(check, 500);
        }
    }
    
    printCards();
})
