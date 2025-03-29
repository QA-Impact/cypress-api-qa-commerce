describe('Validar a API de alteração de usuário', () => {

  it('Alteração cadastro com sucesso', () => {
    cy.request({
      method: "PUT",
      url: "users/29",
      body: {
        name: "Tamara Teste",
        email: "tamara123@gmail.com",
        password: "123",
        isAdmin: true
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImlzQWRtaW4iOjEsImlhdCI6MTc0Mjc3ODM4NiwiZXhwIjoxNzQyNzgxOTg2fQ.YUalfZikFjPJJlTeVOkiXjhEvUlfgfaXpqt__iAPOKY"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq("Usuário atualizado com sucesso.")
    })
  })

  it('Alteração cadastro com erro', () => {
    cy.request({
      method: "PUT",
      url: "users/22",
      body: {
        name: "Tamara Teste",
        email: "tamara123@gmail.com",
        password: "123",
        isAdmin: true
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": ""
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq("Token não fornecido.")
    })
  })
})