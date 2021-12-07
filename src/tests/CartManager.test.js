import cart from "../CartManager";

test("adds item", () => {
  cart.add({ name: "one", price: "10", id: 1 });
  cart.add({ name: "two", price: "11", id: 2 });
  cart.add({ name: "three", price: "1", id: 3 });

  expect(cart.cart).toHaveLength(3);
});

test("finds item", () => {
  expect(cart.find(1)).toHaveProperty("name", "one");
});

test("adds quantity property to items", () => {
  expect(cart.cart[0].quantity).toBe(1);
  expect(cart.cart[1].quantity).toBe(1);
  expect(cart.cart[2].quantity).toBe(1);
});

test("cart length is correct", () => {
  expect(cart.cartLength).toBe(3);
});

test("total is correct", () => {
  expect(cart.total).toBe(22);
});

test("increments quantity", () => {
  cart.incrementQuantity(1);
  expect(cart.cart[0].quantity).toBe(2);

  expect(cart.total).toBe(32);
  expect(cart.cartLength).toBe(4);
});

test("increments quantity if item added again", () => {
  cart.add({ name: "three", price: "1", id: 3 });
  expect(cart.cart).toHaveLength(3);
  expect(cart.cart[2].quantity).toBe(2);

  expect(cart.total).toBe(33);
});

test("removes item", () => {
  cart.remove(2);
  expect(cart.cart.length).toBe(2);

  expect(cart.total).toBe(22);
});

test("decrements quantity", () => {
  cart.decrementQuantity(1);
  expect(cart.cart[0].quantity).toBe(1);

  expect(cart.total).toBe(12);
});

test("removes item if quantity 0", () => {
  cart.decrementQuantity(1);
  const itemOne = cart.cart.find((item) => item.name === "one");
  expect(itemOne).toBeUndefined();

  expect(cart.total).toBe(2);
  expect(cart.cartLength).toBe(2);
});

test("sets quantity", () => {
  cart.setQuantity(3, 10);
  expect(cart.total).toBe(10);
  expect(cart.cartLength).toBe(10);
});
