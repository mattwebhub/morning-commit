// Strategy Interface
class ShippingStrategy {
  calculate(parcel) {
    throw new Error("Calculate method not implemented");
  }
}

// Concrete Strategies
class FedEx extends ShippingStrategy {
  calculate(parcel) {
    return "$45.95";
  }
}

class UPS extends ShippingStrategy {
  calculate(parcel) {
    // calculations...
    return "$39.40";
  }
}

class USPS extends ShippingStrategy {
  calculate(parcel) {
    // calculations...
    return "$42.30";
  }
}

// Context
class Shipping {
  constructor() {
    this.company = "";
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate(parcel) {
    return this.company.calculate(parcel);
  }
}

const parcel = { from: "76712 Waco", to: "10012 New York" };

const shipping = new Shipping();

shipping.setStrategy(new FedEx());
console.log("FedEx: " + shipping.calculate(parcel));

shipping.setStrategy(new UPS());
console.log("UPS: " + shipping.calculate(parcel));

shipping.setStrategy(new USPS());
console.log("USPS: " + shipping.calculate(parcel));
