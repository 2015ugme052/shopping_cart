
public class ShoppingCartMain {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        for (String item : args) {
            cart.addItem(item);
        }
        int total = cart.calculateTotal();
        System.out.println(total);
    }
}
