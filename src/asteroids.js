const uniqueId = () =>
  Math.floor(Math.random() * Date.now() + Math.random() * 999999);

const asteroids = [
  {
    name: "1 Ceres",
    price: "253",
    id: uniqueId(),
  },
  {
    name: "4 Vesta",
    price: "299",
    id: uniqueId(),
  },
  {
    name: "25143 Itokawa",
    price: "99",
    id: uniqueId(),
  },
  {
    name: "243 Ida",
    price: "147",
    id: uniqueId(),
  },
  {
    name: "433 Eros",
    price: "444",
    id: uniqueId(),
  },
  {
    name: "253 Mathilde",
    price: "121",
    id: uniqueId(),
  },
  {
    name: "101955 Bennu",
    price: "191",
    id: uniqueId(),
  },
];

export default asteroids;
