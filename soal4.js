let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let upateData = {
    ...data,
    name: 'Raja Syafaat Al Ridho',
    email: 'raja.alridho@gmail.com',
    hobby: 'Sepakbola'
};

console.log(upateData)

let {street,city}=data.address
console.log(`street:${street}
city:${city}`)