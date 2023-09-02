import java.util.*;
import java.io.*;

public class Main
{
	public static void main(String[] args) throws FileNotFoundException
	{
		System.out.println("Hello World");
		File submissionFile = new File("Lab1.txt");
		Scanner sc = new Scanner(submissionFile);
		while (sc.hasNextLine())
		{
		    System.out.println(sc.nextLine());
		}
	}
}
