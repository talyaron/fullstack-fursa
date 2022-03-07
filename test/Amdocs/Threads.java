package test.Amdocs;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Threads implements Runnable {
    List list = new ArrayList();
    static int countTasks = 7;
    final Set <String> set = new HashSet<>(Arrays.asList("firsr" , "second"));
    
    public boolean isRunning (String a){
        for (int i = 0 ; i < a.length(); i++){
            for (int j = 0 ; i < a.length(); j++){
                return false;
            }
    
        }
      //  set.add(true);
        return true;
    }
    @Override
    public void run() {
        // TODO Auto-generated method stub

    }

    class Animal implements AnimanInterface {
        public Animal() {

        }

        @Override
        public void printName() {
            // TODO Auto-generated method stub

        }

    }

    public static void main(String[] args) throws Exception {
         //String[] arr = new String[10];
         String a = "string";
        // List<Integer> inList = new ArrayList<Integer>();
        // inList.add(1);
        // inList.add(25);
        // inList.add(42);
        // inList.add(12);
        // inList.add(65);
        // inList.add(10);
        // inList.add(5);
        // inList.add(48);
        // inList.add(79);
        // System.out.println(inList.stream().max(Comparator.comparing(Integer::valueOf)).get());
        // System.out.println(Optional.ofNullable(arr[0]).isPresent());

        // Map<Integer, Integer> map = new HashMap<>();
        // // map.put(1,111);//v1
        // map.put(2, 111); // v2 Overrides
        // map.put(2, 444);
        // map.entrySet().forEach(System.out::println);

        // System.out.println("==============");

        // System.out.println(map.merge(2, 444, (v1, v2) -> v1 + v2));
        // map.entrySet().forEach(System.out::println);

        // Map<String, Integer> map2 = new HashMap<>();
        // map2.put("A", 222);
        // map2.put("B", 333);
        // map2.put("C", 444);
        // map2.put("D", 2132);
        // System.out.println(map2.getOrDefault("A", 1003));
        // int a =3;
        // while(a-->0){
        //     System.out.println(a);
        // }

        Callable<Integer> foo = ()->{
            return countTasks;
        };
        ExecutorService executor = Executors.newFixedThreadPool(10);// pool 10 threads 
        List <Future<Integer>> results = new ArrayList<>(); 
        while(countTasks-->0){
            //System.out.println();
            results.add(executor.submit(foo));

        }
        for (Future<Integer> res: results){

            System.out.println("res = " + res.get());
        }
        executor.shutdown();
        System.out.println(String.format("id = %08.2f", 423.147));
    }
    
}
