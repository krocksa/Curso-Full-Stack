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

}
