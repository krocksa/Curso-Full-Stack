public class ThrowExample {

    public static void main(String[] args) {
    }

    public void checkAge(int age) throws IllegalArgumentException {
        if (age < 18) {
            throw new IllegalArgumentException("You must be over than 18 years old.");
        } else {
            System.out.println("You are over 18 years old.");
        }
    }

    // Si usamos Excepciones personalizadas,
    // debemos declararlas al inicio de la función,
    // usando throws + La Excepción personalizada,
    // para evitar errore y malas prácticas de programación.

    // Si la excepción es RuntimeException,
    // no es necesario declararla,
    // ya que, es una Excepción en tiempo de ejecución.

    public void chackScore(int score) throws CustomException {
        if (score < 0 || score > 100) {
            throw new CustomException("The score must be between 0 and 100.");
        } else {
            System.out.println("""
                    Correct score: %d
                    """.formatted(score));
        }
    }

}
