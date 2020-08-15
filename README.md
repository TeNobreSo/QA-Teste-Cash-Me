# QA-Teste-Cash-Me
Repositório para realização do teste para vaga de QA na Cash Me

Plano de teste:

*Funcionalidade: Quadro

Cenãrio: Criar um quadro
Dado que o usuário está logado
Quando criar um quadro de nome "Quadro de teste"
Então o quadro com nome "Quadro de teste" é criado


*Funcionalidade: Lista

Cenário: Adicionar uma lista no quadro
Dado que o usuario tem um quadro criado 
Quando adicionar uma lista no quadro com nome "to do"
Então o usuário criou uma lista no quadro com nome "to do"


*Funcionalidade: Convidar

Cenário: Criar um time
Dado que o usuário está num dos quadros
Quando desejar que outras pessoas contribuam no quadro
Então outros membros são adicionados ao quadro


*Funcionalidade: Cartão

Cenário: Mover um cartão
Dado que o usuário deseja mover um cartão 
Quando mover o cartão para a lista de atividades finalizadas
Então o cartão é finalizado 

