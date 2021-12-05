const uniqueId = () =>
  Math.floor(Math.random() * Date.now() + Math.random() * 999999);

const asteroids = [
  {
    name: "1 Ceres",
    urlName: "1-ceres",
    price: "253",
    id: uniqueId(),
  },
  {
    name: "4 Vesta",
    price: "299",
    urlName: "4-vesta",
    id: uniqueId(),
  },
  {
    name: "25143 Itokawa",
    urlName: "25143-itokawa",
    price: "99",
    id: uniqueId(),
  },
  {
    name: "243 Ida",
    urlName: "243-ida",
    price: "147",
    id: uniqueId(),
  },
  {
    name: "433 Eros",
    urlName: "433-eros",
    price: "444",
    id: uniqueId(),
  },
  {
    name: "253 Mathilde",
    urlName: "253-mathilde",
    price: "121",
    id: uniqueId(),
  },
  {
    name: "101955 Bennu",
    urlName: "101955-bennu",
    price: "191",
    id: uniqueId(),
  },
];

export default asteroids;
