class Ator
{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Diretor
{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Filme
{
    constructor(id,titulo,ano,genero,duracao,sinopse,cartaz,direcao,elenco,classificacao,avaliacao,btnDetalhes){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao,
        this.btnDetalhes=null;
    }

    getCard = async () => {
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        let imgCartaz = document.createElement("img")
        imgCartaz.setAttribute("class", "card-img-topz")
        imgCartaz.setAttribute("src", this.cartaz)
        let cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body")
        let hCardTitle = document.createElement("h5")
        hCardTitle.setAttribute("class", "card-title")
        let divDetalhes = document.createElement("div")
        divDetalhes.setAttribute("style","display:flex; justify-content:space-around;")
        let divGenero = document.createElement("div")
        divGenero.setAttribute("style", "flex-grow:1;")
        let divAnoProducao = document.createElement("div")
        divAnoProducao.setAttribute("style", "flex-grow:1;")
        let divClassificacao = document.createElement("div")
        divClassificacao.setAttribute("style", "flex-grow:1;")
        hCardTitle.appendChild(document.createTextNode(this.titulo))
        divGenero.appendChild(document.createTextNode(this.genero))
        divAnoProducao.appendChild(document.createTextNode(this.ano))
        divClassificacao.appendChild(document.createTextNode(this.classificacao))
        divDetalhes.appendChild(divGenero)
        divDetalhes.appendChild(divAnoProducao)
        divDetalhes.appendChild(divClassificacao)
        card.appendChild(imgCartaz)
        card.appendChild(cardBody)
        cardBody.appendChild(hCardTitle)
        cardBody.appendChild(divDetalhes)

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
        return card;
    }
    
  setBtnDetalhes= () => {
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id",this.id);
    this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
}
getBtnDetalhes= () =>{
    return this.btnDetalhes
}
getCardDetalhes = () =>{
    let cardDetalhesFilmeimg = document.createElement("div");
    cardDetalhesFilmeimg.setAttribute("class","card-Detalhes-img");
    let imgDetalhes = document.createElement("img");
    imgDetalhes.setAttribute("class","img-detalhes");
    imgDetalhes.setAttribute("src", this.cartaz);
    let cardDetalhes = document.createElement("div");
    cardDetalhes.setAttribute("class","cardDetalhes");
    let detalhesBody = document.createElement("div");
    detalhesBody.setAttribute("class","detalhes-body");
    
    let btnSalvar = document.createElement('button');
    btnSalvar.appendChild(document.createTextNode('Salvar'));
    btnSalvar.setAttribute('id',"btnSalvar");
    divDetalhes.appendChild(btnSalvar);

    let btnFechar = document.createElement('button');
    btnFechar.appendChild(document.createTextNode('Fechar'));
    btnFechar.setAttribute('id','btnFechar');
    divDetalhes.appendChild(btnFechar);

   
}  

} 

