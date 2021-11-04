function addToCart(productName="elmas", quantity ){
    console.log("sepete eklendi : " + productName + " adet: " + quantity)
}

addToCart(undefined,10)
// addToCart("elma")
// addToCart()
// addToCart(15)

let sayHelloğ = () => {
    console.log("helloğ")
}
sayHelloğ()

let sayHello2 = function () {
    console.log("heloğğ2")
    
}
sayHello2()

let product1 = {productName:"elmasya", unitPrice:5,quantity:31}
function addToCart3(product) {
    console.log("ürün: "+ product.productName)
    console.log("adet: "+ product.quantity)
    console.log("fiat: "+ product.unitPrice)
}
addToCart3(product1) 
let total=0
function add(birŞey,...numbers) { //rest
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i]
    }
    console.log(total)
    console.log(birŞey)
    
}
add(10,20)


let numbers = [10,20,31,5,3,10]
//console.log(...numbers)
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluşehirleri]]=[
    {name:"iç anadolu", population:"20m"},
    {name:"marmara", population:"30m"},
    {name:"karadeniz", population:"10m"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluşehirleri)


let newProductName,newUnitPrice,newQuantity = ({
    productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = 
    {productName:"elma",unitPrice:10,quantity:5})

console.log(newProductName)