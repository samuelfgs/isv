const mp = new MercadoPago('TEST-6345755e-9ead-483b-9d23-a698707f8af8', {
  locale: 'pt-BR'
});
// Inicialize o checkout
mp.checkout({
  preference: {
    id: '154849269-9db53374-e23f-4b86-9943-184b8d0db6b4'
  },
  render: {
    container: '.mercado-pago-btn', // Indique o nome da class onde será exibido o botão de pagamento
    label: 'Pagar', // Muda o texto do botão de pagamento (opcional)
  }
});