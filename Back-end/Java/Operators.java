public class Operators {
    public static void main(String[] args) {
        int a = 3;
        int b = 5;

        a = b;
        /* a = a + 1;//Forma obsoleta y en desuso */
        // Operadores de asignación directa
        a += 1;
        System.out.println(a);

        // Operadores de Comparación (o Relacionales)

        System.out.println(a == b);// Operador de igualdad
        System.out.println(a > b);// Mayor Que
        System.out.println(a < b);// Menor Que
        System.out.println(a >= b);// Mayor o igual Que
        System.out.println(a <= b);// Menor o igual Que

        // Operadores Lógicos (AND Y OR)
        // AND: && / OR: ||
    }
}
