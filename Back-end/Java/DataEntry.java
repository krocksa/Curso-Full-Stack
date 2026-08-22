import java.util.Scanner;

public class DataEntry {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String name = scanner.nextLine();

        System.out.println("Ingresa tu edad: ");
        Integer age = scanner.nextInt();

        System.out.println(
                """
                        Hola %s, tienes %d años de edad.
                        """.formatted(name, age));

        scanner.close();
    }
}
