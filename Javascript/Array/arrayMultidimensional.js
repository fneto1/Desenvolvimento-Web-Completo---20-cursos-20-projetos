let hortifruti = Array()

hortifruti[0] = 'frutas'
hortifruti[1] = 'verduras'

hortifruti['frutas'] = ['banana', 'maçã', 'uva']

hortifruti['verduras'] = ['chuchu', 'batata', 'cenoura', 'abobora']

hortifruti['verduras'][4] = 'jiló'

console.log(hortifruti)

console.log(hortifruti.length)

console.log(hortifruti['frutas'][1])
console.log(hortifruti['frutas'].length)
console.log(hortifruti['verduras'].length)

console.log(hortifruti[0].length)
