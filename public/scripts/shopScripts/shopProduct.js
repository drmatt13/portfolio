//check if sold out
const waitForStoreData = () => {
  if (!promiseFulfilled) {
    if (!promiseFulfilledChecked) {
      promiseFulfilledChecked = true;
    }
    setTimeout(waitForStoreData, 100);
  } else {
    let soldout = false;
    if (storeData[index].product === 'item' || storeData[index].product === 'onesize') {
      if (storeData[index].quantity === 0) {
        soldout = true;
      }
      if (storeData[index].product === 'shirt' || storeData[index].product === 'leggings') {
        let quantity = 0;
        for (let key in storeData[index].letterSize) {
          quantity += storeData[index].letterSize[key];
        }
        if (quantity === 0) {
          soldout = true;
        }
      }
    }

    // add to cart
    const addBtn = document.getElementById("add-btn");
    if (!soldout) {
      addBtn.classList.remove("add-btn-color1")
      addBtn.classList.add("add-btn-color2");
      addBtn.addEventListener("click", () => {
        addItemToCart();
      });
    }



  }
};

waitForStoreData();