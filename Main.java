import java.util.*;
import java.io.*;
import javax.swing.*;

public class Main
{
	public static void main(String[] args) throws FileNotFoundException
	{
		// Screen frame = new Screen();

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
		    if (line.startsWith("--") == false && n < TotalQuestions)
		    {
		        line = line.toLowerCase();
		        char[] lineSyntax = line.toCharArray();
		        String NewLine = "";
		        for (int i = 0; i < line.length(); i++)
		        {
		            switch (lineSyntax[i])
		            {
		                case ' ':
		                {
		                    if (NewLine.charAt(NewLine.length() - 1) != ' ')
		                    {
                                if ((i + 1) < line.length() && (lineSyntax[i + 1] == ')' || lineSyntax[i + 1] == ','))
    		                    {
    		                        i++;
    		                    }
    		                    NewLine = NewLine + lineSyntax[i];
		                    }
		                    break;
		                }
		                case '<':
		                {
		                    if ((i - 1) >= 0 && lineSyntax[i - 1] != ' ')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    NewLine = NewLine + lineSyntax[i];
		                    if ((i + 1) < line.length() && lineSyntax[i + 1] != ' ' && lineSyntax[i + 1] != '=')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    break;
		                }
		                case '>':
		                {
		                    if ((i - 1) >= 0 && lineSyntax[i - 1] != ' ')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    NewLine = NewLine + lineSyntax[i];
		                    if ((i + 1) < line.length() && lineSyntax[i + 1] != ' ' && lineSyntax[i + 1] != '=')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    break;
		                }
		                case '=':
		                {
		                    if ((i - 1) >= 0 && lineSyntax[i - 1] != ' ' && lineSyntax[i - 1] != '>' && lineSyntax[i - 1] != '<')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    NewLine = NewLine + lineSyntax[i];
		                    if ((i + 1) < line.length() && lineSyntax[i + 1] != ' ')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    break;
		                }
		                case ',':
		                {
		                    NewLine = NewLine + lineSyntax[i];
		                    if ((i + 1) < line.length() && lineSyntax[i + 1] != ' ')
		                    {
		                        NewLine = NewLine + ' ';
		                    }
		                    break;
		                }
		                case '(':
		                {
		                    NewLine = NewLine + lineSyntax[i];
		                    if ((i + 1) < line.length() && lineSyntax[i + 1] == ' ')
		                    {
		                        i++;
		                    }
		                    break;
		                }
		                default:
		                {
		                    NewLine = NewLine + lineSyntax[i];
		                }
		            }
		        }
		        line = NewLine;
		        Submission[n] = line;
		        n++;
		    }
		}
		sc.close();

		new Screen(Answers, Submission).setVisible(true);
		
		int CorrectAnswers = 0;
		String IncorrectAnswers = "";
		for (int i = 0; i < TotalQuestions; i++)
		{
		    if (Answers[i].equalsIgnoreCase(Submission[i]))
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
		
		double FinalMarks = ((double) CorrectAnswers / (double) TotalQuestions) * 6.0;
	    System.out.println("FINAL GRADE:\nCorrect Answers = " + CorrectAnswers + "\nIncorrect Answers = " + IncorrectAnswers + "\nScore = " + FinalMarks);
	}
}
