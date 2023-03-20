let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
btnBuscarFilme.onclick  = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=bb1d4839&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach((item)=>{
                let filme = new Filme(
                    item.imdbId,
                    item.Title,
                    item.Year,
                    null,
                    item.Genero,
                    item.Poster,
                    null,
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
   let listaFilmes = await document.querySelector("#lista-filmes");
   listaFilmes.innerHTML = "";
   if(filmes.length > 0){
    filmes.forEach(async(filme) =>{
        console.log(filme);
        listaFilmes.appendChild(await filme.getCard());
        filme.getBtnDetalhes().onclick=()=>{
            detalhesFilme(filme.id);
        }
    });
   }
}

let detalhesFilme = async (id) =>{
    fetch("http://www.omdbapi.com/?apikey=bb1d4839&i="+id)
    .then((resp)=> resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.plot,
            resp.Director,
            resp.Actors.split(","),
            resp.awards,
            resp.imdbRating
        )
        console.log(filme)
    })
}
fecharDetalhes.addEventListener ("click",function(){
    document.getElementById("mostrar-filmes").style.display = "none";
})