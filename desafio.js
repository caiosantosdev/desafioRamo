var seuNome = "Guilherme";
const objetos = [ 
    {nome: "Carlos", idade: 20},
    {nome: "Gabriel", idade: 21},
    {nome: "Gabriela", idade: 24}
];
// const novoArray = filterSameFirstLetter(objetos);
// const mediaIdades = mediaDasIdades(novoArray);
const newArray = objetos.filter(sameLeter => sameLeter.nome[0] == seuNome[0]);
console.log(newArray);
console.log(mediaDasIdades(newArray));
// console.log(novoArray);
// console.log(`A media de pessoas que tem a mesma letra inicial que voce: ${mediaIdades}`);

function mediaDasIdades(novoArray){
    let somaIdades = 0;
    for(let i = 0 ; i < novoArray.length ; i++){
        somaIdades+=novoArray[i].idade;
    }
    let mediaIdades = somaIdades/(novoArray.length);
    return mediaIdades;
}
//função que retorna o valor de objetos. // substitui a funcao do filter.
// function filterSameFirstLetter(objetos){
//     let arrayNomes = [];
//     for(let i = 0 ; i < objetos.length ; i++){
//         let auxNome = objetos[i].nome.split('');
//         if(auxNome[0] == seuNome[0]){
//             arrayNomes.push(objetos[i]);

//         }
//     }
//     return arrayNomes;
// }
//funcao que faz a media das idades do array filtrado.