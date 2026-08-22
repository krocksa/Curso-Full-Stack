public class Inheritance {
    public static void main(String[] args) {
        // Herencia ("es un...")
        // En Java la Herencia es simple
        var animal = new Animal("My animal");
        animal.eat();

        var myDog = new Dog("Snoopy", 10);
        myDog.eat();

        var myCat = new Cat("Tom");
        myCat.eat();

        var myBird = new Bird("Tweety");
        myBird.eat();
        myBird.fly();

    }

    public static class Animal {
        String name;

        public Animal(String name) {
            this.name = name;
        }

        public void eat() {
            System.out.println("The animal named " + name + " is eating.");
        }
    }

    public static class Dog extends Animal {
        int age;
        // Sobreescritura de Métodos

        // El constructor heredado puede tener más parámetros,
        // pero es obligatorio que contenga el super.
        public Dog(String name, int age) {
            super(name);// En este caso, super sí es necesario
            this.age = age;
        }

        @Override // Es una buena práctica colocarlo
                  // Significa que estamos sobreescribiendo.
        public void eat() {
            /*
             * super.eat();//El super hace referencia a la clase padre.
             * //No siempre nos hará falta el super
             */

            System.out.println("The dog named " + name + " is eating.");

        }
    }

    public static class Cat extends Animal {
        // Sobreescritura de Métodos

        // El constructor heredado puede tener más parámetros,
        // pero es obligatorio que contenga el super.
        public Cat(String name) {
            super(name);// En este caso, super sí es necesario
        }

        @Override // Es una buena práctica colocarlo
                  // Significa que estamos sobreescribiendo.
        public void eat() {
            /*
             * super.eat();//El super hace referencia a la clase padre.
             * //No siempre nos hará falta el super
             */

            System.out.println("The cat named " + name + " is eating.");
        }
    }

    public static class Bird extends Animal {

        // Sobreescritura de Métodos

        // El constructor heredado puede tener más parámetros,
        // pero es obligatorio que contenga el super.
        public Bird(String name) {
            super(name);// En este caso, super sí es necesario
        }

        @Override // Es una buena práctica colocarlo
                  // Significa que estamos sobreescribiendo.
        public void eat() {
            /*
             * super.eat();//El super hace referencia a la clase padre.
             * //No siempre nos hará falta el super
             */

            System.out.println("The bird named " + name + " is eating.");
        }

        public void fly() {
            System.out.println("The bird is flying.");
        }
    }
}
