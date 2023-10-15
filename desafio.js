var seuNome = "Guilherme";
seuNome = seuNome.split('');
var somaIdades = 0;
var mesmaIdade = 0;
let objetos = [ 
    {nome: "Carlos", idade: 20},
    {nome: "Gabriel", idade: 20},
    {nome: "Gabriela", idade: 20}
];
    for(let i = 0 ; i < objetos.length ; i++){
        let auxNome = objetos[i].nome.split('');
        if(auxNome[0] == seuNome[0]){
            console.log(objetos[i].nome);
            somaIdades+=objetos[i].idade;
            mesmaIdade++;
        }
    }
console.log(somaIdades/mesmaIdade);