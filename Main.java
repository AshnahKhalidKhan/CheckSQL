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
		    if (line.startsWith("--"))
		    {
		        System.out.println(line);
		    }
		}
		sc.close();
	}
}
