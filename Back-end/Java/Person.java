public class Person {
    // Atributes
    protected String name;
    protected int age;
    protected float height;
    public float weight;
    final private String id;

    // Constructor
    protected Person(String name, int age, float height, float weight, String id) {
        this.name = name;
        setAge(age);
        this.height = height;
        this.weight = weight;
        this.id = id;
    }

    // Getter
    public String getId() {
        return id;
    }

    // Setter
    public void setAge(int age) {
        if (age <= 0) {
            System.out.println("Edad no válida.");
        } else {
            this.age = age;
        }
    }

    public String getAgeFormatted() {
        if (this.age <= 0) {
            return "Edad no válida";
        }
        return this.age + " años de edad";
    }

    public void saveHello() {
        System.out.println(
                """
                        Hola, soy %s, tengo %s,
                        mido %.2f de altura, y peso %.2fkg.
                        """.formatted(name, getAgeFormatted(), height, weight));
    }
}
