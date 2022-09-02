class Icecream {
  constructor(flavor, scoop) {
    this.flavor = flavor;
    this.size = scoop;
  }
  describe() {
    return `${this.flavor} comes ${this.scoop}.`;
  }
}
class Order {
  constructor(name) {
    this.name = name;
    this.icecreams = [];
  }
  addIcecream(icecream) {
    if (icecream instanceof Icecream) {
      this.icecreams.push(icecream);
    } else {
      throw new Error(
        `You can only add an instance of Icecream. Argument is not icecream: ${icecream}`
      );
    }
  }
  describe() {
    return `${this.flavor} has ${this.icecream.length} icecreams.`;
  }
}

class Menu {
  constructor() {
    this.orders = [];
    this.selectedOrder = null;
  }
  start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createOrder();
          break;
        case "2":
          this.viewOrder();
          break;
        case "3":
          this.deleteOrder();
          break;
        case "4":
          this.displayOrders();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Thank you and Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
    0)End order
    1)Create new order
    2)View order
    3)Delete order
    4)Dispaly all orders
    `);
  }

  showOrderMenuOption(orderInfo) {
    return prompt(`
    0)back
    1)create Icecream
    2)delete Icecream
    ----------------------
    ${orderInfo}
   `);
  }

  displayOrders() {
    let orderString = " ";
    for (let i = 0; i < this.orders.length; i++) {
      orderString += i + ")" + this.orders[i].name + "\n";
    }
    alert(orderString);
  }
  createOrder() {
    let name = prompt("Enter name for the new order:");
    this.orders.push(new Order(name));
  }
  viewOrder() {
    let index = prompt("Enter the index of the order you want to view:");
    if (index > -1 && index < this.orders.length) {
      this.selectedOrder = this.orders[index];
      let description = "Order Name:" + this.selectedOrder.name + "\n";

      for (let i = 0; i < this.selectedOrder.icecreams.length; i++) {
        description +=
          i +
          ")" +
          this.selectedOrder.icecreams[i].flavor +
          " - " +
          this.selectedOrder.icecreams[i].size +
          "\n";
      }
      let selection = this.showOrderMenuOption(description);
      switch (selection) {
        case "1":
          this.createIcecream();
          break;
        case "2":
          this.deleteIcecream();
      }
    }
  }
  deleteOrder() {
    let index = prompt("Enter the index of the order you want to delete:");
    if (index > -1 && index < this.orders.length) {
      this.orders.splice(index, 1);
    }
  }

  createIcecream() {
    let flavor = prompt("Enter the flavor you want:");
    let scoop = prompt("Enter the number of scoops:");
    this.selectedOrder.icecreams.push(new Icecream(flavor, scoop));
  }
  deleteIcecream() {
    let index = prompt("Enter the index of icecream you want to delete:");
    if ((index > -1) & (index < this.selectedOrder.icecreams.length));
    {
      this.selectedOrder.icecreams.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
