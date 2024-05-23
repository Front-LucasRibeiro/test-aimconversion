function boxFloatPrice() {
  let formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
  let price = document.querySelector('[data-testid="mod-productprice"] [data-testid="price-value"]').innerHTML;
  price = Number(price.split("R$&nbsp;")[1].replace(/,/g, '.').replace(/\./g, ''));

  let oldPrice = document.querySelector('[data-testid="mod-productprice"] [data-testid="price-original"]').innerHTML;
  oldPrice = Number(oldPrice.split("R$&nbsp;")[1].replace(/,/g, '.').replace(/\./g, ''));

  let discountValue = ((oldPrice - price) / 100).toLocaleString('pt-BR', formato);

  let discountElement = document.querySelector('[data-testid="showcase-price"] small');
  discountElement.style.color = 'rgb(89, 192, 11)';
  discountElement.innerHTML = `(${discountValue} de <strong>desconto</strong>)`;
}

boxFloatPrice(); 