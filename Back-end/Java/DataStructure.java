import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class DataStructure {
    public static void main(String[] args) {
        // Estructuras de datos: Nos sirven para almacenar más de un dato
        // También se les llama Colecciones de datos

        // 1.- Arrays. Guardan varios datos del mismo tipo.
        // Son indexados y en su mayoría son estáticos
        int[] numbers = new int[3];
        String[] strings = new String[3];
        String[] names = { "Roger", "Francisca", "Yorgelis" };

        numbers[0] = 2;
        strings[0] = "Krocksa";

        // 2.- Listas. También son indexados.
        // Son más flexibles. No se les puede asignar tipos de datos primitivos,
        // Todos los datos primitvos tienen sus equivalentes en clases.
        // Tienen métodos un poco distintos que los Arrays.
        ArrayList<String> fruits = new ArrayList<>();
        var nums = new ArrayList<Integer>();

        fruits.add("Pear");
        nums.add(1);
        nums.add(2);
        nums.add(3);
        nums.set(1, 1);
        System.out.println(nums.get(1));
        nums.remove(2);
        // System.out.println(nums.get(2));// ERROR! El índice ya no existe.
        System.out.println(nums.size());// Size es como Length
        System.out.println(nums);

        // 3.- Sets. Sólo almacena datos únicos
        HashSet<String> days = new HashSet<>();
        var ages = new HashSet<>();
        ages.add(34);
        ages.add(56);
        ages.add(29);
        ages.add(34);// No se guardará, ya que, ya existe un dato idéntico a este.
        ages.add(29);// No se guardará, ya que, ya existe un dato idéntico a este.
        System.out.println(ages);
    }
}

// 4:03:00 Maps