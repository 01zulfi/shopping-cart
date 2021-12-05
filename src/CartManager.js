const CartManager = () => {
  let cart = [];

  const total = () => {
    return cart.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );
  };

  const add = (item) => {
    cart = [...cart, { ...item, quantity: 1 }];
  };

  const remove = (id) => {
    cart = cart.filter((item) => item.id !== id);
  };

  const find = (id) => {
    const targetItem = cart.find((item) => item.id === id);

    return {
      incrementQuantity() {
        targetItem.quantity = targetItem.quantity + 1;
      },
      decrementQuantity() {
        if (targetItem.quantity === 1) {
          remove(id);
          return;
        }

        targetItem.quantity = targetItem.quantity - 1;
      },
    };
  };

  return {
    get cart() {
      return cart.map((item) => {
        return { ...item };
      });
    },
    get total() {
      return total();
    },
    add,
    remove,
    find,
  };
};

const cart = CartManager();

export default cart;
