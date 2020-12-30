

describe('Shooping', () => {

    it('Navigate to vercel demo site', () => {
    
        cy.visit('')
        cy.get('#mobile-search').type('jacket')
        cy.visit('/search/publications')

    })

})