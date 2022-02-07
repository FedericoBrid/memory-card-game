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

//array card random...
const cardSort = card.sort(()=>Math.random() - 0.5);

contador = 0;

card.forEach((element) => {
    const divCards = document.createElement("div");
    const imgCard = document.createElement("img");
    const backCard = document.createElement("div");
    divCards.classList.add("divCards");
    imgCard.classList.add("imgCard");
    backCard.classList.add("backCard");
    
    backCard.id = new Date().valueOf();
    imgCard.src = `img/${element.srcImg}`;
    imgCard.name = element.name;

    section.appendChild(divCards);
    divCards.appendChild(imgCard);
    divCards.appendChild(backCard);
});

arrayComparation = [];
arrayCard = [];
function target(item){
    const target = item.target;
    if (target.classList == 'backCard') {
        //vuelvo al elemento hermano anterior(img)
        const img = target.previousSibling;
        img.style.display = 'block';
        // pusheo el name del item al array cardNuevo
        arrayComparation.push(img.name);
          //aca ver como solucionar el item ya seleccionado como img,
          // pasarlo a la clase backCard. mirar el console.log
        console.log(target)
    }
    // console.log(target.parentNode.lastChild)
    //compara que los dos items sean iguales o no. si son iguales los guarda en arrayComparation
    if (arrayComparation.length == 2) {
        if (arrayComparation[0] == arrayComparation[1]) {
            arrayCard.push(arrayComparation[0],arrayComparation[1]);
            arrayComparation = [];
        }else{
            //aca esta el problema         
            arrayComparation = [];
        }
    }
}


section.addEventListener("click", target);