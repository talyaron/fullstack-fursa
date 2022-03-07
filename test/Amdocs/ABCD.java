package test.Amdocs;

public class ABCD {

    public static void main(String[] args) {
        String[] arr = { "ABDCADB", "AABCD", "ADCDZBADC", "ABCDADBC" };
        String str = "ABCD";
        System.out.println(max_intersect(str, arr));
    }

    // function to return the biggest String
    public static String max_intersect(String str, String[] arr) {
        String max = "";
        for (int i = 0; i < arr.length; i++) {
            if (couple(arr[i]) && check_not_exit(str, arr[i]) && arr[i].length() > str.length()) {
                max = arr[i].length() > max.length() ? arr[i] : max;
            }
        }
        return max;

    }

    // checks if there is a letter not exits in str
    private static boolean check_not_exit(String str, String string) {
        for (int i = 0; i < string.length(); i++) {
            if (!str.contains(String.valueOf(string.charAt(i)))) {
                return false;
            }
        }
        return true;
    }

    // checks if there are same characters in sequence
    private static boolean couple(String a) {
        for (int i = 0; i < a.length() - 1; i++) {
            if (a.charAt(i) == a.charAt(i + 1)) {
                return false;
            }
        }
        return true;
    }

}
