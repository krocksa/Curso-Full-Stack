public class Abstraction {
    public static void main(String[] args) {
        // Abstracción:
        // Muestra sólo las característica esenciales,
        // y oculta todo lo demás, para la protección de los datos

        var dog = new Dog();
        dog.sleep();
        var cat = new Cat();
        cat.sleep();
    }

    // Tipos de Abstracción:
    // 1.- Clases Abstractas
    public static abstract class Animal {

        public abstract void sound();

        public abstract void sleep();
    }

    public static class Dog extends Animal {
        @Override
        public void sound() {

            System.out.println("Guau");

        }

        @Override
        public void sleep() {

            System.out.println("The dog is sleeping");
        }
    }

    public static class Cat extends Animal {
        @Override
        public void sound() {

            System.out.println("Miau");

        }

        @Override
        public void sleep() {

            System.out.println("The cat is sleeping");

        }
    }

    // 2.- Interface
    public interface Flying {
        void fly();
    }

    public static class Falcon extends Animal implements Flying {

        @Override
        public void sound() {
            System.out.println("Kack-kack-kack");
        }

        @Override
        public void sleep() {
            System.out.println("The falcon is sleeping");
        }

        @Override
        public void fly() {
            System.out.println("The falcon flies");
        }

    }

    public static class Owl extends Animal implements Flying {

        @Override
        public void sound() {
            System.out.println("Ju-ju-ju");
        }

        @Override
        public void sleep() {
            System.out.println("The owl is sleeping");
        }

        @Override
        public void fly() {
            System.out.println("The owl flies");
        }

    }
}
