const shoppingItems = [
    {
        id: 1,
        name: "milk",
        date: "2021-10-07",
        price: 2.50,
        need: true,
    },
    {
        id: 2,
        name: "bread",
        date: "2021-10-07",
        price: 2,
        need: false,
    },
    {
        id: 3,
        name: "eggs",
        date: "2021-10-07",
        price: 5,
        need: true,
    },
    {
        id: 4,
        name: "sandwhich meat",
        date: "2021-10-07",
        price: 8,
        need: true,
    },
    {
        id: 5,
        name: "watermelon",
        date: "2021-10-07",
        price: 3,
        need: false
    }
]

const addToShoppingItems = (listObject) => {
    const lastIndex = shoppingItems.length - 1
    const currentLastItem = shoppingItems[lastIndex]
    const maxId = currentLastItem.id
    const newId = maxId + 1

    listObject.id = newId
    listObject.date = new Date()
    shoppingItems.push(listObject)
}

addToShoppingItems({
    name: "strawberries",
    date: "2021-10-07",
    price: 4,
    need: true,
}) 
addToShoppingItems({
    name: "blueberries",
    date: "2021-10-07",
    price: 8,
    need: false,
})
addToShoppingItems({
    name: "melons",
    date: "2021-10-07",
    price: 10,
    need: false,
})
addToShoppingItems({
    name: "steak",
    date: "2021-10-07",
    price: 16,
    need: true,
})

for (const shoppingItem of shoppingItems) {
    if(shoppingItem.price >= 8){
        console.log(`The ${shoppingItem.name} is too much for you`)
    }
    else{
        console.log(`You might be able to get these ${shoppingItem.name}`)
    }}