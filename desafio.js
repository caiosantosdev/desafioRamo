var seuNome = "Guilherme";
const objetos = [ 
    {nome: "Garlos", idade: 4},
    {nome: "Gabriel", idade: 3},
    {nome: "Gabriela", idade: 3}
];

//atribui à "newArray" todos os objetos do array "objetos" cuja letra inicial é igual a letra inicial do nome do usuário.
const newArray = objetos.filter(sameLeter => sameLeter.nome[0] == seuNome[0]);
console.log(newArray);
console.log(mediaDasIdades(newArray));

//faz a media das idades das pessoas presentes no novoArray.
function mediaDasIdades(novoArray){
    let somaIdades = 0;
    for(let i = 0 ; i < novoArray.length ; i++){
        somaIdades+=novoArray[i].idade;
    }
    let mediaIdades = somaIdades/(novoArray.length);
    return mediaIdades.toFixed(2);
}