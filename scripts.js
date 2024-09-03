let btnOrder = document.querySelector(".btn-order");
let btnAbout = document.querySelector(".btn-about");
let btnSed = document.querySelector(".btn-sed");

btnAbout.addEventListener("click", () => {
  alert("Вся информация по номеру телефону");
});

btnOrder.addEventListener("click", () => {
  alert("Чтобы оставить заказ, заполните формулу ");
});

btnSed.addEventListener("click", () => {
  alert("Ваш заказ отправлен. Ожидайте!");
});
