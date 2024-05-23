function hideAddBag() {
  document.querySelector('[data-testid="bagButton"]').style.display = 'none';
  document.querySelector('.sc-fqkvVR.dQuACk.sc-BGXOW.duTIoJ').style.display = 'none';
}

function changeBtnColor() {
  document.querySelector('[data-testid="buyButton"]').style.backgroundColor = '#0086FF';
}

changeBtnColor();
hideAddBag();