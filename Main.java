import java.util.*;
import java.io.*;

public class Main
{
	public static void main(String[] args) throws FileNotFoundException
	{
	    int TotalQuestions = 27;
	    
	    String[] Answers = new String[TotalQuestions];
	    String[] Submission = new String[TotalQuestions];
	    
	    File AnswerFile = new File("Answer.sql");
		Scanner sc = new Scanner(AnswerFile);
		int n = 0;
		while (sc.hasNextLine())
		{
		    String line = sc.nextLine();
		    line = line.toLowerCase();
		    Answers[n] = line;
		    n++;
		}
		sc.close();
	    
		File StudentSubmissionFile = new File("Lab1.sql");
		sc = new Scanner(StudentSubmissionFile);
		n = 0;
		while (sc.hasNextLine())
		{
		    String line = sc.nextLine();
		    //If the line is a comment, it is useless to us.
		    if (line.startsWith("--") == false && n < TotalQuestions)
		    {
		        //Make string lowercase
		        line = line.toLowerCase();
		        //Save in array
		        Submission[n] = line;
		        n++;
		    }
		}
		sc.close();
		
		int CorrectAnswers = 0;
		String IncorrectAnswers = "";
		for (int i = 0; i < TotalQuestions; i++)
		{
		    if (Answers[i] == Submission[i])
		    {
		        CorrectAnswers++;
		    }
		    else
		    {
		        System.out.println((i + 1) + ".\nAnswer: " + Answers[i] + "\nSubmission: " + Submission[i] + "\n");
		        if (IncorrectAnswers == "")
		        {
		            IncorrectAnswers = IncorrectAnswers + (i + 1);
		        }
		        else
		        {
		            IncorrectAnswers = IncorrectAnswers + ", " + (i + 1);
		        }
		    }
		}
		
// 		System.out.println("PRINTING ANSWERS HERE");
// 		for (int i = 0; i < TotalQuestions; i++)
// 		{
// 		    System.out.println(Answers[i]);
// 		}
	
// 		System.out.println("PRINTING SUBMISSION HERE");	
// 		for (int i = 0; i < TotalQuestions; i++)
// 		{
// 		    System.out.println(Submission[i]);
// 		}
		
		double FinalMarks = ((double) CorrectAnswers / (double) TotalQuestions) * 6.0;
	    System.out.println("FINAL GRADE:\nCorrect Answers = " + CorrectAnswers + "\nIncorrect Answers = " + IncorrectAnswers + "\nScore = " + FinalMarks);
	}
}
