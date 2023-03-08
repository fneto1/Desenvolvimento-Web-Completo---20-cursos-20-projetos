const data = new Date();
let hour = data.getMilliseconds();

/* console.log(data.getDate())
console.log(data.getMonth() + 1)
console.log(data.getFullYear()-2000) */

console.log(data.toString())

//adicionando dias, meses ou anos

data.setDate(data.getDate() + 1)

console.log(data.toString())

//operações entre datas

//new Date(year, month, day, hours, minutes, seconds, milliseconds);

let data1 = new Date(2023, 0, 27)
console.log(data1.toString())

let data2 = new Date(2021, 2, 1)
console.log(data2.toString())

console.log(data1.getTime()) //retorna a data em milisegundos em relação a 01/01/1970

console.log((((data1.getTime() - data2.getTime())*1000)/3600)/24)

