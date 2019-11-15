# TwitterDesafio

Dependências - Nodejs - Banco mysql 


1° - Configuração do banco, é necessário a criação de uma database com o seguinte nome: twitter
2° - apontado na porta 127.0.0.1:3306 ( padrão mysql) - usuário: root : senha : 1234
3° - caso não queira usar as configurações padrões só precisa alterar no arquivo utils.js
4° - Data base criada com sucesso, entre no arquivo do projeto querys.js  e execute os comandos na sequência.


- Feito isso você já terá os usuários e então poderá usar a aplicação 

Para levantar a aplicação, basta entrar na pasta raiz do projeto e executar o comando NPM i, isso irá baixar todas dependências do projeto.
Agora basta executar um node server.js para startar a aplicação, ela será startada na porta 8080, caso sinta-se a necessidade de mudar, basta alterar o arquivo .env a porta e reiniciar a aplicação.

- A aplicação segue da premissa que o usuário logado no twitter é o usuário Everton, então para postar tweets com outros usuários você pode usar a rota no postman:

http://localhost:8080/api/tweet/

método: POST - 
 body: 
 {
	"message": "Vou gerenciar umas paradas aqui!",
	"id": "2"
}

O campo id: é do usuário que você clicou para seguir, por exemplo, alvaro tem id: 3, sandro 2, etc..

A página dos tweets só será atualizada caso você poste outro tweet, ou execute um f5, para listar os novos tweets publicados.


