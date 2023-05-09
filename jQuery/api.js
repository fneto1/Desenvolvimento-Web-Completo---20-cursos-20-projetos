/* let obj = {
  gender: "female",
  name: {
    title: "Mrs",
    first: "Margaretha",
    last: "Ammann",
  },

  location: {
    street: { number: 3011, name: "Römerstraße" },
    city: "Oppenheim",
    state: "Hessen",
    country: "Germany",
    postcode: 42374,
    coordinates: { latitude: "-50.8557", longitude: "86.3783" },
    timezone: {
      offset: "-3:00",
      description: "Brazil, Buenos Aires, Georgetown",
    },
  },
  email: "margaretha.ammann@example.com",
}; */

//let objJSON = JSON.stringify(obj);
//let objPARSE = JSON.parse(obj)

//console.log(obj)

//console.log(objJSON)
//console.log(objPARSE)

let randomAPI = '{"results":[{"gender":"male","name":{"title":"Monsieur","first":"Yusuf","last":"Gonzalez"},"location":{"street":{"number":4928,"name":"Rue Abel-Gance"},"city":"Allaman","state":"Valais","country":"Switzerland","postcode":2535,"coordinates":{"latitude":"-60.9625","longitude":"-83.5119"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"yusuf.gonzalez@example.com","login":{"uuid":"f69750de-9c45-4a63-a6a9-b9292e139387","username":"redmeercat723","password":"hardrock","salt":"JWpuNzpx","md5":"c1ff0207ac2f76fdbde0f76d00814333","sha1":"466b1a1db1142ceb748892e054243928e805c54b","sha256":"611391fedfd1b085f682b3f26fc7ee1cd07594e8da62624483b6308e0b58f098"},"dob":{"date":"1979-08-26T23:04:55.539Z","age":43},"registered":{"date":"2005-06-12T11:04:58.878Z","age":17},"phone":"079 126 25 48","cell":"077 932 99 80","id":{"name":"AVS","value":"756.4960.8198.14"},"picture":{"large":"https://randomuser.me/api/portraits/men/60.jpg","medium":"https://randomuser.me/api/portraits/med/men/60.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/60.jpg"},"nat":"CH"}],"info":{"seed":"79aee42450e0ff3c","results":1,"page":1,"version":"1.4"}}'

//console.log(randomAPI)

let objPARSE = JSON.parse(randomAPI)

console.log(objPARSE.results[0].gender)


