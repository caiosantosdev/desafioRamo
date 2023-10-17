var seuNome = "Guilherme";
const objetos = [ 
    {nome: "Carlos", idade: 4},
    {nome: "Gabriel", idade: 27},
    {nome: "Gabriela", idade: 20}
];

//atribui à "novoArray" todos os objetos do array "objetos" cuja letra inicial é igual a letra inicial do nome do usuário.
const novoArray = objetos.filter(mesmaLetra => mesmaLetra.nome[0] == seuNome[0]);
//cria um novo array "nomes" contendo só os nomes das pessoas com a mesma letra inicial obtida em "novoArray".
const nomes = novoArray.map(item => item.nome);
console.log(nomes);
//faz a soma de todas as idades do array e atribui à variável "media".
let media = novoArray.reduce((soma, item) => soma + item.idade , 0);
media = (media / novoArray.length).toFixed(2);
console.log(`média: ${media}`);






/*COISAS USADAS PARA APRENDIZADO

faz a media das idades das pessoas presentes no novoArray.
function mediaDasIdades(novoArray){
    let somaIdades = 0;
    for(let i = 0 ; i < novoArray.length ; i++){
        somaIdades+=novoArray[i].idade;
    }
    let mediaIdades = somaIdades/(novoArray.length);
    return mediaIdades.toFixed(2);
}

poderia ter usado esse também, mas não sairia do jeito que o desafio pede.
newArray.forEach((item, index) => {console.log(item.nome)});


seuNome = seuNome.split(''); 

function filterSameFirstLetter(objetos){
    let arrayNomes = [];
    for(let i = 0 ; i< objetos.length ; i++){
        let auxNome = objetos[i].nome.split('');
        if(auxNome[0] == seuNome[0]){
            arrayNomes.push(objetos[i]);
        }
    }
    return arrayNomes;
}*/