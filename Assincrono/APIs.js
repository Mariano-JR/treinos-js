/*APIs (Application Programming Interface): É uma forma de intermediar os resultados do back-end com o front-end
- Podem ser acessadas atraves de URLs. */
//JSON (JavaScript Object Notation): formato comum de retorno de APIs
//fetch: Retorna uma promise, precisa da ultilização do await
fetch(url, option) 
    .then(response => response.json()) //converte a resposta em JSON
    .then(json => console.log(json))

//Operações no banco com fetch: POST, GET, PUT, DELETE, etc)
//Ex1
fetch('https://endereco-api.com/', {
    method: 'GET',      //
    cache: 'no-cache',  //configuração de cache
})
    .then(response => response.json())
    .then(json => console.log(json))
//Ex2
fetch('https://endereco-api.com/', {
        method: 'POST',      // manda dados para serem gravados no banco de dados
        cache: 'no-cache', 
        body: JSON.stringify(data)  //converte JSON em string 
    })
        .then(response => response.json())
        .then(json => console.log(json))

//Valores de APIs sempre tem que se tratados antes de serem mandados