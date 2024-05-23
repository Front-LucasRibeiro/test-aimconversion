function changeBtnBagFloat() {
  let btnBuy = document.querySelector('[data-testid="buyButton"]');
  let clonedBtnBuy = btnBuy.cloneNode(true);
  let container = document.querySelector('.sc-fqkvVR.dQuACk.sc-BGXOW.duTIoJ');
  
  container.innerHTML = '';
  container.appendChild(clonedBtnBuy);
  clonedBtnBuy.style.backgroundColor = '#0086FF';

  clonedBtnBuy.addEventListener('click', function () {
    btnBuy.click();
  });
}

changeBtnBagFloat();