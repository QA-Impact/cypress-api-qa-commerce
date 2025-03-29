describe('Validar a API de consulta de usuário', () => {
  it('Pesquisa usuário com sucesso', () => {
    cy.request({
      method: "GET",
      url: "users"
    }).then((response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an("array")
    }))
  })
})