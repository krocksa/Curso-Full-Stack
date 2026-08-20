public class Functions {
    public static void main(String[] args) {
        sendEmail();
        sendEmailToUser("rogeryonartan@gmail.com");
        sendEmailToUser("Roger", "rogeryonatan@gmail.com");
        sendEmaiWithState("rogeryonatan@gmail.com");

        var state = sendEmaiWithState("");
        System.out.println(state);
    }

    // Funciones
    // También llamadas "Métodos"
    // Si una función/método es estática,
    // sólamente puede recibir funciones estáticas, sino,
    // debe instanciarse la clase desde la función estática primero

    public static void sendEmail() {
        System.out.println("Email sent.");
    }

    public static void sendEmailToUser(String email) {
        System.out.println("Email sent to " + email);
    }

    public static void sendEmailToUser(String name, String email) {
        System.out.println("Email sent to " + name + ". The user's email is: " + email);
    }
    // Dos funciones pueden tener el mismo nombre,
    // si su comportamiento es distinto, es decir,
    // si modificamos el comportamiento de los parámetros.
    // La anterior se llama "Sobrecarga".

    public static boolean sendEmaiWithState(String email) {
        if (email.isEmpty()) {
            return false;
        }
        System.out.println("Email sent.");
        return true;
    }
}