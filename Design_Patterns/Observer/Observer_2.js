
class Model {
  constructor() {
    this.value = 0;
    this.listeners = [];
  }
  
  incrementValue() {
    this.value++;
    this.listeners.forEach(listener => listener.update(this.value));
  }
  
  addListener(listener) {
    this.listeners.push(listener);
  }
}

class View {
  update(newValue) {
    console.log(`Value changed: ${newValue}`);
  }
}