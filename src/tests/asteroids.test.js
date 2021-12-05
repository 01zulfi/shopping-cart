import asteroids from "../asteroids";

test("seven asteroids", () => {
  expect(asteroids).toHaveLength(7);
});

test("no same id", () => {
  const checkForDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const temp = arr.filter((el) => el === arr[i]);
      if (temp.length > 1) return true;
    }
    return false;
  };

  const ids = asteroids.map((asteroid) => asteroid.id);
  const flag = checkForDuplicate(ids);

  expect(flag).toBe(false);
});
