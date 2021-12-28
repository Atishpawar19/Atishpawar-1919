class MethodOverloadingEx{  
   public static int add(int a, int b){
       return a+b;
    }  
   public static int add(int a, int b, int c){
       return a+b+c;
       
    }  
 
    public static void main(String args[]) {
      System.out.println(add(4, 6));
      System.out.println(add(4, 6, 7));
    }


} 

// same class , same method name ,different signature - overloading