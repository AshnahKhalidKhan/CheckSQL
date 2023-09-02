import java.util.*;
import java.io.*;

public class Main
{
	public static void main(String[] args) throws FileNotFoundException
	{
		File submissionFile = new File("Lab1.sql");
		Scanner sc = new Scanner(submissionFile);
		while (sc.hasNextLine())
		{
		    //System.out.println(sc.nextLine());
		    String line = sc.nextLine();
		    //If the line is a comment, it is useless to us.
		    if (line.startsWith("--") == false)
		    {
		        //Make string lowercase
		        //Save in array
		        //Compare arrays
		        //Count correct ones
		        //Count incorrect ones and mark them
		        //Generate final mark
		        System.out.println(line);
		    }
		}
		sc.close();
	}
}
