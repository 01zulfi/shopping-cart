import cart from "../CartManager";

test("adds item", () => {
  cart.add({ name: "one", price: "10", id: 1 });
  cart.add({ name: "two", price: "11", id: 2 });
  cart.add({ name: "three", price: "1", id: 3 });

  expect(cart.cart).toHaveLength(3);
});

test("adds quantity property to items", () => {
  expect(cart.cart[0].quantity).toBe(1);
  expect(cart.cart[1].quantity).toBe(1);
  expect(cart.cart[2].quantity).toBe(1);
});

test("total is correct", () => {
  expect(cart.total).toBe(22);
});

test("increments quantity", () => {
  cart.find(1).incrementQuantity();
  expect(cart.cart[0].quantity).toBe(2);

  expect(cart.total).toBe(32);
});

test("removes item", () => {
  cart.remove(2);
  expect(cart.cart.length).toBe(2);

  expect(cart.total).toBe(21);
});

test("decrements quantity", () => {
  cart.find(1).decrementQuantity();
  expect(cart.cart[0].quantity).toBe(1);

  expect(cart.total).toBe(11);
});

test("removes item if quantity 0", () => {
  cart.find(1).decrementQuantity();
  const itemOne = cart.cart.find((item) => item.name === "one");
  expect(itemOne).toBeUndefined();

  expect(cart.total).toBe(1);
});
