describe('Validar a API de cadastro de usuário', () => {

  it('Criação de usuário com sucesso', () => {
    cy.request({
      method: "POST",
      url: "users",
      body: {
        name: "Tamara Teste Cypress",
        email: "tamara1238@gmail.com",
        password: "123",
        isAdmin: true
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq("Usuário criado com sucesso.")
    }))
  })

  it('Criação de usuário com erro - email duplicado', () => {
    cy.request({
      method: "POST",
      url: "users",
      body: {
        name: "Tamara Teste Cypress",
        email: "tamara123@gmail.com",
        password: "123",
        isAdmin: true
      },
      failOnStatusCode: false,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq("Email já cadastrado.")
    }))
  })
})