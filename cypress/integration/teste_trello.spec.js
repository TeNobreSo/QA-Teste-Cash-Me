describe('Teste Trello',() =>{
    before(() => {
        cy.visit('https://trello.com/') 
    })

    it('Usuário está logado',() => {
        cy.get('a[class="btn btn-sm btn-link text-white"]').click()
        cy.get('input[id="user"]').type('teste.tereza@teste.com')
        cy.get('input[id="password"]').type('Teste123')
        cy.get('input[id="login"]').click()
    })

    it('Validar criação do quadro com nome Quadro de teste', () => {
        cy.get('div[class = "board-tile mod-add"]').click()
        cy.contains('Adicionar outra lista').click()
        cy.get('input[class="list-name-inpu')
    })
    
   
})