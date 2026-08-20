public class Person {
    // Atributes
    String name;
    int age;
    float height;
    float weight;

    // Constructor
    public Person(String name, int age, float height, float weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    // Method
    public void saveHello() {
        System.out.println(
                """
                        Hola, soy %s, tengo %d años de edad,
                        mido %.2f de altura, y peso %.2fkg.
                        """.formatted(name, age, height, weight));
    }
    // La sintaxis anterior de Cadena de texto se llama:
    // Text Block.

}
