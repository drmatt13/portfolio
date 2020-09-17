const itemContainers = document.querySelectorAll(".item-container");
for (let i=0; i<itemContainers.length; i++) {
  itemContainers[i].addEventListener("click", () => {
      window.location.href = `/shop/${itemContainers[i].getAttribute('link')}`;
    });
}

