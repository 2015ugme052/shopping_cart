
import java.util.*;

public class ShoppingCart {
    private final Map<String, Integer> items = new HashMap<>();

    public void addItem(String item) {
        items.put(item, items.getOrDefault(item, 0) + 1);
    }

    public int calculateTotal() {
        int total = 0;
        for (Map.Entry<String, Integer> entry : items.entrySet()) {
            String item = entry.getKey();
            int quantity = entry.getValue();

            switch (item.toLowerCase()) {
                case "apple":
                    total += 35 * quantity;
                    break;
                case "banana":
                    total += 20 * quantity;
                    break;
                case "melon":
                    total += 50 * ((quantity / 2) + (quantity % 2));
                    break;
                case "lime":
                    total += 15 * ((2 * (quantity / 3)) + (quantity % 3));
                    break;
                default:
                    System.out.println("Unknown item: " + item);
            }
        }
        return total;
    }

    public Map<String, Integer> getItems() {
        return items;
    }
}
