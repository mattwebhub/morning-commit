function Singleton() {
  if (typeof Singleton.instance === "object") {
    return Singleton.instance;
  }

  Singleton.instance = this;
  return this;
}

function Singleton() {
  if (typeof Singleton.prototype.instance === "object") {
    return Singleton.prototype.instance;
  }

  Singleton.prototype.instance = this;
  return this;
}

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

let Singleton = (() => {
  let instance;

  let createInstance = () => {
    const object = new Object("Instance created");
    return object;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

