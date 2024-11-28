const offline = document.querySelector('.offline')
const conexao = document.querySelector('.not-conexao')

offline.addEventListener('mouseenter', () => {
  conexao.style.display = 'block'
  offline.addEventListener('mouseleave', () => {
    conexao.style.display = 'none'
  })
})