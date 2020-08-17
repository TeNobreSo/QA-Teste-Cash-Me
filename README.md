# QA-Teste-Cash-Me
Repositório para realização do teste para vaga de QA na Cash Me.

## Plano de teste:

### Introdução

  O produto a ser testado é o Trello, o qual é uma ferramenta para acompanhamento e gerenciamento de projetos, sejam eles pessoais ou profissionais. Na ferramenta é possível criar "quadros", que é uma seção num nível macro do projeto, no quadro temos as funcionalidades de favoritar, criar um time, funcionalidades de configuração e a inserção de "lista" onde é possível descrever as etapas do seu projeto, posteriormente dentro de cada lista pode-se adicionar um cartão de atividade e prazos.

### Objetivo 
  O objetivo é testar as principais funcionalidades do Trello, para levantar essas prioridades foi levado em consideração o conceito geral da ferramenta que é de gerenciamento de projetos e para se ter um projeto é necessário que os seguintes aplicações estejam funcionando corretamente: criação de quadros, lista, cartões de atividades e adição de membros ao quadro, visto que outras pessoas podem servir como colaboradoras para o projeto.


### Tipo do teste
  Funcional.
### Objetivo do teste
  Testar a criação de um Quadro e validar sua criação.
### Requisitos que motivaram o teste
   O sistema deve permitir a criação de um Quadro, pois essa é uma das principais funções obtidas pelo Trello.
### Cenários de teste
*Funcionalidade: Quadro*
```
Cenário: Criar um quadro
Dado que o usuário está logado
Quando criar um quadro de nome "Quadro de teste"
Então o quadro com nome "Quadro de teste" é criado

```

### Tipo do teste
  Funcional.
### Objetivo do teste
  Testar a criação de uma lista de nome específico num quadro e validar sua criação.
### Requisitos que motivaram o teste
  O sistema deve permitir a criação de uma lista num quadro, pois essa é uma das principais funções obtidas pelo Trello.
### Cenários de teste
*Funcionalidade: Lista*

```
Cenário: Adicionar uma lista no quadro
Dado que o usuario tem um quadro criado 
Quando adicionar uma lista no quadro com nome "to do"
Então o usuário criou uma lista no quadro com nome "to do"

```

### Tipo do teste
  Funcional.
### Objetivo do teste
  Testar a criação de um cartão com um nome específico e validar sua criação.
### Requisitos que motivaram o teste
  O sistema deve permitir a criação de um cartão com as informações de atividades, pois essa é uma das principais funções obtidas pelo Trello.
### Cenários de teste
*Funcionalidade: Cartão*

```
Cenário: Criar um cartão
Dado que o usuário deseja criar um cartão com nome "Atividade 1"
Quando criar o cartão numa lista
Então o cartão "Atividade 1" é criado com sucesso na lista 

```

### Tipo do teste
  Funcional.
### Objetivo do teste
  Testar a adição de membros no quadro e validar a adição.
### Requisitos que motivaram o teste
  O sistema deve permitir a adição de outros membros para colaborar no quadro do projeto, pois essa é uma das principais funções obtidas pelo Trello.
### Cenários de teste
*Funcionalidade: Convidar*

```
Cenário: Criar um time
Dado que o usuário está num dos quadros
Quando desejar que outras pessoas contribuam no quadro
Então outros membros são adicionados ao quadro

```


