let listaeventos = ['Javascript_na_pratica']
let listapales = ['Maicon']
let dataatual = new Date ('10/19/2021').toLocaleDateString().substr(0,10)
let listaparticipantes = ['Maicon', 'André', 'Gustavo']


console.log(dataatual)
console.log('CADASTRO DE EVENTOS')
console.log('Por favor, selecione um numero para proseguir')
console.log('[1] - Cadastrar um novo evento')
console.log('[2] - Cadastrar-se em um evento existente')

// Inserir variavel pelo terminal
let tipocadastro = 2

console.log('Você selecionou a opção', tipocadastro)
if (tipocadastro == 1) {
    console.log('Certo, por favor, insira o nome do evento:')
    //Inserir nome do evento pelo terminal
    let nomeevento = 'JavaScript_na_pratica'
    console.log('Certo, e qual será da data do evento',nomeevento)
    //INSERIR DATA PELO TERMINAL
    let dataevento = new Date ('10/18/2021').toLocaleDateString().substr(0,10)
    if (dataevento <= dataatual) {
        console.log('Certo, a data do evento é válida, por favor, insira o nome do palestrante')
        //INSERIR O NOME DO PALESTRANTE PELO TERMINAL
        let nomepalestrante = ('Maicon')
        listaeventos.push(nomeevento)
        listapales.push(nomepalestrante)
        console.log(`Evento cadastrado com sucesso`)
        console.log(`O enveto ${nomeevento} será realizado pelo palestrante ${nomepalestrante} na data ${dataevento}`)
    } else {
        console.log('Data inválida')
    }

}
//PARA TESTAR ESSA PARTE DO CÓDIGO, COMO NÃO É POSSIVEL INTERAGIR COM O TERMINAL, PARA QUE EVENTOS POSSAM SER CADASTRADOS E INSERIDOS NA LISTA
//É NECESSARIO PRIMEIRAMENTE PASSAR ALGUM VALOR PARA LISTA DE EVENTOS E PALESTRANTES

else if(tipocadastro == 2) {
    console.log('Certo, selecione o evento desejado:')
    console.log(listaeventos)
    //INSERIR PELO TERMINAL
    let eventodesejado = 'Javascript_na_pratica'
    if (listaeventos.includes(eventodesejado)) {
        console.log('Evento escolhido',eventodesejado,'Com o palestrante',listapales[0])
        console.log('Para completar seu cadastro no evento, por favor digite seu nome:')
        // INSERIR NOME PELÇO TERMINAL
        let nomeusuario = 'Maicon Lucas'
        console.log(`Certo ${nomeusuario}, Qual sua idade?`)
        // INSERIR IDADE PELO TERMINAL
        let idadeusuario = 18
        if (idadeusuario >= 18) {
            console.log('Idade válida')
            if (listaparticipantes.length <= 100) {
                console.log('Cadastro conclúido, com sucesso!')
                console.log('Obrigao por usar o sistema SAVANIS')
                listaparticipantes.push(nomeusuario)
                console.log(listaparticipantes)
            } else {
                console.log('não Fói possível se cadastrar no evento, devido a lista estar cheia.')
            }
        } else {
            console.log('Idade inválida')
        }
    } else {
        console.log('Nenhum evento com esse nome cadastrado')
    }
}
else {
    console.log('Valor inválido')
}
