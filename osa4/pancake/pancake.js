const form = document.querySelector(".form-container");
const form2 = document.querySelector(".price-display");

const pancakePriceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalPriceElement = document.querySelector(".totalPrice");
  const priceBanner = document.querySelector(".price-banner");
  const totalPriceElement2 = document.querySelector(".price-display");

  let total = parseInt(typeSelect.value);

  for (const item of checkboxes) {
    if (item.checked) {
      total += parseInt(item.value);
    }
  }

  totalPriceElement.textContent = `${total}€`;

  totalPriceElement2.textContent = `Kokonaishinta --> ${total}€`;

  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

form.addEventListener("change", pancakePriceCalc);
