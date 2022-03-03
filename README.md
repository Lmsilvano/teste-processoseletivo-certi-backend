# teste-processoseletivo-certi-backend
 backend para gerar fake database. Optei por mesclar dados do SWAPI e do seguinte fakedatabase (JSON) encontrando no github: [Akabab](https://github.com/akabab/starwars-api/tree/master/api).
Associei os dados dos pilotos com as espaços naves encontradas no SWAPI.


# Instruções para rodar o projeto.
- Basta clonar, ou fazer donwload deste repositório;
 
- e com o [Node](https://nodejs.org/en/) devidamente instalado em sua maquina;
 
- Abra o terminal de sua prefência no diretório raiz deste projeto(o diretório raiz é onde se encontra o arquivo package.json). 
dica :(no windows basta segurar a tecla shift e clicar no fundo da pasta raiz do projeto com o botão direito do mouse e selecionar "abrir janela do powershellaqui") 

- com terminal aberto no diretório raiz do projeto, execute o comando "npm install -y".
- Após concluir a instalação, mantendo-se no diretório raiz do projeto, execute o comando "npm start"
- os endpoints podem ser testados através de ferramentas cliente API REST como o [INSOMNIA](https://insomnia.rest/download), por exemplo.

## EndPoints

### [POST] http://localhost:5555/api/v1/getswapidata/
- Resultado esperado: pega os dados de pilotos do SWAPI e gera um arquivo JSON


### [POST] http://localhost:5555/api/v1/generateDb/
- Resultado esperado: mescla os dados do SWAPI com a solução do [Akabab](https://github.com/akabab/starwars-api/tree/master/api)

### [POST]  http://localhost:5555/api/v1/generatefinaldb/
- Resultado esperado: recolhe o dado das starships do SWAPI e mescla relacionando aos pilotos, gerando o ultimo fake database JSON.
