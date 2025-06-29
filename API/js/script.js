api = "https://pokeapi.co/api/v2/";

endpoint = "pokemon?limit=1";

consulta = api + endpoint;
//lista pokemons 
fetch(consulta).then((resposta) => resposta.json()).then((dados) => {
    //console.log(dados);
    dados.results.map((infoPokemon) => {
        console.log(infoPokemon);
        //listar informações de cada pokemon
        fetch(infoPokemon.url).then((resposta) => resposta.json()).then((dadosDeCadaPoke) => {

            console.log(dadosDeCadaPoke);
            document.querySelector("#pokemons").innerHTML += `
            <div class="pokemon card p-4 d-flex align-itens-cente">
            <img style="width:300px;" src="${dadosDeCadaPoke.sprites.front_default}"
            <h4>${dadosDeCadaPoke.name}</h4>
            </div>
               `;

        });
    });
});
