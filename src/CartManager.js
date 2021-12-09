const CartManager = () => {
  let cart = [];

  const total = () => {
    return cart.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );
  };

  const cartLength = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const _find = (id) => {
    return cart.find((item) => item.id === id);
  };

  const add = (itemToAdd) => {
    const targetItem = _find(itemToAdd.id);
    if (targetItem) {
      targetItem.quantity = targetItem.quantity + 1;
      return;
    }

    cart = [...cart, { ...itemToAdd, quantity: 1 }];
  };

  const remove = (id) => {
    cart = cart.filter((item) => item.id !== id);
  };

  const incrementQuantity = (id) => {
    const targetItem = _find(id);
    targetItem.quantity = targetItem.quantity + 1;
  };

  const decrementQuantity = (id) => {
    const targetItem = _find(id);
    if (targetItem.quantity === 1) {
      remove(id);
      return;
    }

    targetItem.quantity = targetItem.quantity - 1;
  };

  const setQuantity = (id, quantity) => {
    const targetItem = _find(id);
    targetItem.quantity = quantity;
  };

  const clear = () => (cart = []);

  return {
    get cart() {
      return cart.map((item) => {
        return { ...item };
      });
    },
    get total() {
      return total();
    },
    get cartLength() {
      return cartLength();
    },
    find(id) {
      const targetItem = _find(id);
      return { ...targetItem };
    },
    add,
    remove,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
    clear,
  };
};

const cart = CartManager();

export default cart;
