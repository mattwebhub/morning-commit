const Subject = function() {
  this.observers = [];

  return {
    subscribeObserver: function(observer) {
      this.observers.push(observer);
    },

    unsubscribeObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    },

    notifyObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    },

    notifyAllObservers: function() {
      for(var i = 0; i < this.observers.length; i++){
        this.observers[i].notify(i);
      };
    }
  };
};

const Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}