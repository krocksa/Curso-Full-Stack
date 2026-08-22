public class Exceptions {
    public static void main(String[] args) {

        // Manejo de Excepciones

        try {// Lo que puede fallar
            var result = 10 / 0;
            System.out.println(result);
        } catch (Exception e) {// Si el try falla
            System.out.println(
                    """
                            Error's type: %s
                            """.formatted(e));
        } finally {// Esto siempre se ejecuta
            System.out.println("End");
        }

        // Lanzamiento de excepciones: throw
        var throwExample = new ThrowExample();
        try {
            throwExample.checkAge(15);

        } catch (IllegalArgumentException e) {
            System.out.println("""
                    Age's Error: %s
                    """.formatted(e));
        }

        // Excepciones personalizadas
        try {
            throwExample.chackScore(100);
        } catch (CustomException e) {
            System.out.println("""
                    Score's error: %s
                    """.formatted(e));
        }
    }
}
