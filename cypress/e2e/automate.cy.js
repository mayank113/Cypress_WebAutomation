describe('template spec', () => {

  it('passes', () => {
    cy.visit('https://www.freecrm.com/index.html')
    cy.xpath("//span[contains(text(),'Log In')]").click()
    cy.wait(10)
    cy.xpath("//input[@name='email']").type("mayank.saxena12051990@gmail.com")
    cy.get("[name='password']").type("mayank.saxena12051990@gmail.com")
    cy.get("[name='password']").type("mayank.saxena12051990@gmail.com")

  })
})