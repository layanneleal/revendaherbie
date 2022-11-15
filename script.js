let carros = [] //Declara array global

function adicionarCarros() {
  //Cria referência aos elementos da página
  let inModelo = document.getElementById('inModelo')
  let inPreco = document.getElementById('inPreco')

  let modelo = inModelo.value //Obtem conteúdos dos campos
  let preco = Number(inPreco.value)

  //Verifica preenchimento dos campos
  if (modelo == '' || preco == 0 || isNaN(preco)) {
    alert('Informe corretamente os dados')
    inModelo.focus()
    return
  }
  carros.push({modelo: modelo, preco: preco}) //Adiciona dados ao array de objetos

  //Limpa campos e posiciona cursor em inModelo
  inModelo.value = ''
  inPreco.value = ''
  inModelo.focus()

  listarCarros() //Chama function que lista os carros
}
let btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarCarros)

function listarCarros() {
 //Verifica se array está vazio 
  if (carros.length == 0) {
    alert('Não há carros na lista')
    return
  }
  let lista = '' //Variável para concatenar lista de carros

  //Percorre os elementos do array
  for (let i = 0; i < carros.length; i++) {
    lista += carros[i].modelo + ' R$: ' + carros[i].preco.toFixed(2) + '\n'
  }
  //Referencia elemento e altera conteúdo exibido
  document.getElementById('outLista').textContent=lista
}
let btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCarros)

function filtrarCarros() {
  //Faz a leitura do valor máximo a partir do método prompt
  let maximo = Number(prompt('Qual o valor máximo que você deseja pagar?'))

  //Se não preencheu ou conteúdo inválido ...
  if (maximo == 0 || isNaN(maximo)) {
    return
  }

  let lista = '' //Concatenar lista de carros que obedecem ao critério de pesquisa/filtro

  //Percorre todos os elementos do array
  for (let i = 0;i < carros.length; i++) {
    //Verifica se o preço é inferior (ou igual) ao máximo
    if (carros[i].preco <= maximo) {
      lista += carros[i].modelo + ' R$: ' + carros[i].preco.toFixed(2) + '\n'
    }
  }
  //Cria referência a outLista
  let outLista = document.getElementById('outLista')

  if (lista == '') {
    outLista.textContent = 'Não há carros com preço até R$ ' + maximo.toFixed(2)
  }else{
    outLista.textContent = 'Carros até R$ ' + carros.toFixed(2) + '\n---------------------' + lista
  }
}
let btFiltrar = document.getElementById('btFiltrar')
btFiltrar.addEventListener('click', filtrarCarros)