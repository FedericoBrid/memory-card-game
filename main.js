const section = document.querySelector(".section-card");

const card = [
    //20 cards
    {srcImg:"beer.png", name:'beer'},
    {srcImg:"bread.png", name:'bread'},
    {srcImg:"burger.png", name:'burger'},
    {srcImg:"chicken.png", name:'chicken'},
    {srcImg:"coockie.png", name:'coockie'},
    {srcImg:"cupcake.png", name:'cupcake'},
    {srcImg:"donut.png", name:'donut'},
    {srcImg:"flan.png", name:'flan'},
    {srcImg:"fried-egg.png", name:'fried-egg'},
    {srcImg:"hotdog.png", name:'hotdog'},
    {srcImg:"ice-cream.png", name:'ice-cream'},
    {srcImg:"croissant.png", name:'croissant'},
    {srcImg:"milk.png", name:'milk'},
    {srcImg:"pizza.png", name:'pizza'},
    {srcImg:"popcorn.png", name:'popcorn'},
    {srcImg:"ramen.png", name:'ramen'},
    {srcImg:"sandwich.png", name:'sandwich'},
    {srcImg:"sushi.png", name:'sushi'},
    {srcImg:"tacos.png", name:'tacos'},
    {srcImg:"pancakes.png", name:'pancakes'},
    //repeat cards
    {srcImg:"beer.png", name:'beer'},
    {srcImg:"bread.png", name:'bread'},
    {srcImg:"burger.png", name:'burger'},
    {srcImg:"chicken.png", name:'chicken'},
    {srcImg:"coockie.png", name:'coockie'},
    {srcImg:"cupcake.png", name:'cupcake'},
    {srcImg:"donut.png", name:'donut'},
    {srcImg:"flan.png", name:'flan'},
    {srcImg:"fried-egg.png", name:'fried-egg'},
    {srcImg:"hotdog.png", name:'hotdog'},
    {srcImg:"ice-cream.png", name:'ice-cream'},
    {srcImg:"croissant.png", name:'croissant'},
    {srcImg:"milk.png", name:'milk'},
    {srcImg:"pizza.png", name:'pizza'},
    {srcImg:"popcorn.png", name:'popcorn'},
    {srcImg:"ramen.png", name:'ramen'},
    {srcImg:"sandwich.png", name:'sandwich'},
    {srcImg:"sushi.png", name:'sushi'},
    {srcImg:"tacos.png", name:'tacos'},
    {srcImg:"pancakes.png", name:'pancakes'},
]

card.forEach((element) => {
    const divCards = document.createElement("div");
    const imgCard = document.createElement("img");
    const backCard = document.createElement("div");
    divCards.classList.add("divCards");
    imgCard.classList.add("imgCard");
    backCard.classList.add("backCard");
    
    imgCard.src = `img/${element.srcImg}`;

    section.appendChild(divCards);
    divCards.appendChild(imgCard);
    divCards.appendChild(backCard);
});

