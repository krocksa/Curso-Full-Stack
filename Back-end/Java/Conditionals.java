public class Conditionals {
    public static void main(String[] args) {
        // IF-else
        int age = 140;
        String genero = "hombre";

        if (age < 18) {
            System.out.println("Tú eres menor de edad.");
        } else if (age >= 18 && age < 50) {
            System.out.println("Usted es mayor de edad.");
        } else if (age >= 56 && age < 100 && genero == "hombre") {
            System.out.println("Usted es un señor de la tercera edad.");
        } else if (age >= 50 && age < 100 && genero == "mujer") {
            System.out.println("Usted es una señora de la tercera edad.");
        } else if (age >= 100) {
            System.out.println("Usted está haciendo horas extra. FELICIDADES!!!");
        }

        // SWITCH
        int day = 1;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                break;
        }
    }

}
