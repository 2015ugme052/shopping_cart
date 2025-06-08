
public class ShoppingCartTest {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("Apple");
        cart.addItem("Apple");
        cart.addItem("Banana");
        cart.addItem("Melon");
        cart.addItem("Melon");
        cart.addItem("Lime");
        cart.addItem("Lime");
        cart.addItem("Lime");

        int total = cart.calculateTotal();
        System.out.println("Total price: " + total);
    }
}

