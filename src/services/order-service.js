class OrderService {
  static init() {
    localStorage.setItem('orders', JSON.stringify({}));
  }
  static getOrdersFromStore() {
    let ls = localStorage.getItem('orders');
    if (!ls) {
      this.init();
      return [];
    }
    let items = JSON.parse(ls);
    return items;
  }
  static updateOrdersStore(newOrders) {
    localStorage.setItem('orders', JSON.stringify(newOrders));
  }
}

export default OrderService;
