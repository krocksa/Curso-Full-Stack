public class BreakContinue {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i++) {
            if (i == 3) {
                continue;
            } else if (i == 7) {
                System.out.println("The loop was stopped.");
                break;
            } else {
                System.out.println(i);
            }
        }
    }
}
