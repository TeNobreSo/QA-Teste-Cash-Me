describe('Teste Trello',() =>{
    beforeEach(() => {
        cy.visit('https://trello.com/') 
        cy.get('a[class="btn btn-sm btn-link text-white"]').click()
        cy.get('input[id="user"]').type('teste.tereza@teste.com')
        cy.get('input[id="password"]').type('Teste123')
        cy.get('input[id="login"]').click()
    })

    it('Criação do quadro com nome Quadro de teste', () => {
        cy.get('div[class = "board-tile mod-add"]').click()
        cy.get('input[class="subtle-input"]').type('Quadro de teste')
        cy.get('button[class="button primary"]').click()
        cy.get('h1[class="js-board-editing-target board-header-btn-text"]').contains('Quadro de teste')
    })
    
   
})