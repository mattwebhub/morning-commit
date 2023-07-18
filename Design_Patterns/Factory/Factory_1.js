const CarFactory = () => {
  const createCar = (model) => {
    let car;

    if (model === "ModelX") {
      car = new ModelX();
    } else if (model === "ModelY") {
      car = new ModelY();
    }

    return car;
  };

  return {
    createCar,
  };
};

const CarFactory1 = function () {
  function createCar(model) {
    let car;

    if (model === "ModelX") {
      car = new ModelX();
    } else if (model === "ModelY") {
      car = new ModelY();
    }

    return car;
  }

  // Return public methods
  return {
    createCar: createCar,
  };
};
