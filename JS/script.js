let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let listaFilmes = document.querySelector("#lista-filmes");
let mostrarFilmes = document.querySelector("#mostrar-filme");
let navFavoritos = document.querySelector("#nav-favoritos");
btnBuscarFilme.onclick  = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=bb1d4839&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach((item)=>{
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null
                    
                );
                filmes.push(filme);
            });
            
            listarFilmes(filmes);
        });
        
    }
    return false;
}








let listarFilmes = async (filmes) => { 
    listaFilmes.style.display = 'flex';
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick= async()=>{
                listaFilmes.style.display = 'none';
                detalhesFilme(filme.id);
            }
        })
    }
}

let detalhesFilme = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=bb1d4839&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(", "),
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            resp.Actors.split(", "),
            resp.Awards,
            resp.imdbRating
        )

        mostrarFilmes.style.display = "flex";
        mostrarFilmes.appendChild(filme.getDetalhesFilme());
        document.querySelector('#btnFechar').onclick = () =>{
            document.querySelector("#lista-filmes").style.display = "flex";
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").style.display = "none";
        }
        
        document.querySelector("#btnSalvar").onclick = () =>{
            salvarFilme(filme);
        }
    });
}
let salvarFilme = (filme) => {
    let filmesString = localStorage.getItem('filmesFavoritos');
    let filmes=null;
    if(filmesString){
        filmes=JSON.parse(filmesString);
        filmes.push(filme);
    }else{
        filmes=[filme];
    }
    localStorage.setItem('filmesFavoritos',JSON.stringify(filmes));
}
    
navFavoritos.onclick = () =>{
    listarFavoritos();
   }
   let listarFavoritos = () =>{
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    filmesFavoritos = JSON.parse(filmesFavoritos);
    if(filmesFavoritos == null)
    filmesFavoritos = [];
    let filmes = new Array();
    filmesFavoritos.forEach((item) => {
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            null,
            null,
            null,
            item.cartaz,
            null,
            null,
            null,
            null

        );
        filmes.push(filme);
    });
    listarFilmes(filmes);
   }