import java.util.ArrayList;

public class ForEach {
    public static void main(String[] args) {

        var fruits = new ArrayList<String>();
        fruits.add("Apple");
        fruits.add("Strawberry");
        fruits.add("Pineapple");
        fruits.add("Orange");
        fruits.add("Banana");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
