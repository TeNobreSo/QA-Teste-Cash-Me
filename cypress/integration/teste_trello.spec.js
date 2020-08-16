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

    it('Validar criação de uma lista com nome To do', () =>{
        cy.get('div[title="Quadro de teste"]').click()
        cy.get('span[class="placeholder"]').click()
        cy.get('input[class="list-name-input"]').type('To do')
        cy.get('input[class="primary mod-list-add-button js-save-edit"]').click()
        cy.get('h2[class="list-header-name-assist js-list-name-assist"]').contains('To do')
    }) 

    it('Validar criação do cartão com nome Atividade 1', () => {
        cy.get('div[title="Quadro de teste"]').click()
        cy.contains('To do').parent('div').parent('div')
        .get('a[class="open-card-composer js-open-card-composer"]').click({ multiple: true })
        cy.get('textarea[class="list-card-composer-textarea js-card-title"]').type('Atividade 1')
        cy.get('input[value="Adicionar Cartão"]').click()
        cy.contains('Atividade 1')
    })

    it('Validar criação de um time', () => {
        cy.get('div[title="Quadro de teste"]').click()
        cy.get('span[class="board-header-btn-text"]').contains('Convidar').click()
        cy.get('input[class="autocomplete-input"]').type('Tereza Almeida N')
        cy.get('div[class="full-name"]').contains('Tereza Almeida Nobre de Sousa').click()
        cy.get('[data-test-id="team-invite-submit-button"]').click()
        cy.get('span[title="Tereza Almeida Nobre de Sousa (terezaalmeidanobredesousa)"]')
     })
}) 