describe('Validar a API de delete de usuário', () => {
  it('Deleta usuário com sucesso', () => {
    cy.request({
      method: "DELETE",
      url: "/users/22",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlzQWRtaW4iOjEsImlhdCI6MTc0Mjc1MDA4NCwiZXhwIjoxNzQyNzUzNjg0fQ.g_QCAXbWY7gAM5ZBSEVO3mDOR3LSbiT7g1q1HChuhhY"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq("Usuário deletado com sucesso.")
    })
  })

  it('Deleta usuário com erro 401', () => {
    cy.request({
      method: "DELETE",
      url: "/users/22",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ""
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq("Token ausente.")
    })
  })
})