public class Polymorphism {
    public static void main(String[] args) {
        // Polimorfismo
        // Permite que distintos objetos
        // respondan diferente a una misma cosa.

        var animal = new Animal();
        animal.sound();
    }
    // Tipos de polimorfismo:
    // 1.- Polimorfismo por herencia (sobreescritura)

    public static class Animal {
        public void sound() {
            System.out.println("Some sound.");
        }
    }

    public static class Dog extends Animal {
        @Override
        public void sound() {
            System.out.println("Guau.");
        }
    }

    // 2.- Polimorfismo por sobrecarga
    // Dos o más métodos con el mismo nombre,
    // pero con distinto comportamiento
    // en cuanto al tipo de la función,
    // y/o de sus parámetros.
    public static class Calculator {

        public int add(int a, int b) {
            return a + b;
        }

        public double add(double a, double b) {
            return a + b;
        }
    }

}
