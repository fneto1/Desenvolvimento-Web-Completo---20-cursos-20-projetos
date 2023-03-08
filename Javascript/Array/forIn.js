let nomes = ['wandao', 'alface', 'don pollo', 'cobra', 'papinho', 'dump']

for(let i in nomes){
    console.log(i, nomes[i])
}

//indicação para o uso do for in

let nick = Array();

nick['s'] = 'wandao'
nick[true] = 'Sr.White'
nick[-42] = 'don pollo'
nick[10] = 'cobra'
nick['dump'] = 'izaiasPAPINHO'

for( let j in nick){
    console.log(j, nick[j])
}