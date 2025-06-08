import sys
import json

if __name__ == "__main__":
    cart = json.loads(sys.stdin.read()) 
    total_items = sum(cart["items"].values())

    max_count = 0
    most_frequent_item = None
    for item, count in cart["items"].items():
        if count > max_count:
            max_count = count
            most_frequent_item = item

    report = {
        "summary": cart["items"],
        "total_items": total_items,
        "total_cost": cart["total"],
        "mostFrequentItem": most_frequent_item,
    }
    print(json.dumps(report)) 