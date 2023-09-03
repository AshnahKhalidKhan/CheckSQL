import javax.swing.*;
import java.awt.*;
import javax.swing.border.Border;

public class Screen extends JFrame
{
    Screen()
    {
        // Location/size
        this.setTitle("CheckSQL");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(1000, 600);
		this.setResizable(false);
		this.setLocationRelativeTo(null);
        this.setLayout(null);
        // Color, icon
		ImageIcon icon = new ImageIcon("Checkmark.png");
		this.setIconImage(icon.getImage());
		this.getContentPane().setBackground(new Color(0x8766FF));
        // Text
        // Border border = BorderFactory.createLineBorder(Color.RED, 10);
        // JLabel heading = new JLabel();
        // heading.setText("Submission");
        // heading.setBounds(0, 0, 500, 300);
        // heading.setHorizontalAlignment(JLabel.LEFT); //JLabel.LEFT or JLabel.RIGHT of ImageIcon
        // heading.setVerticalAlignment(JLabel.TOP); //JLabel.CENTER or JLabel.BOTTOM of ImageIcon
        // heading.setHorizontalTextPosition(JLabel.CENTER); //JLabel.LEFT or JLabel.RIGHT of ImageIcon
        // heading.setVerticalTextPosition(JLabel.TOP); //JLabel.CENTER or JLabel.BOTTOM of ImageIcon
        // heading.setForeground(new Color(0x00FFFF));
        // heading.setFont(new Font("Calibri", Font.PLAIN, 20));
        // heading.setIconTextGap(50);
        // heading.setBackground(Color.BLACK);
        // heading.setOpaque(true);
        // heading.setBorder(border);
        // this.add(heading);
        // ImageIcon image = new ImageIcon("Checkmark.png");
        // heading.setIcon(image);

        // ----------------------------------------------------------------
        
        JPanel AnswerSection = new JPanel();
        this.add(AnswerSection);
        AnswerSection.setBackground(Color.LIGHT_GRAY);
        AnswerSection.setBounds(0, 0, 450, 450);
        AnswerSection.setLayout(new BorderLayout());

        JPanel CheckmarksSection = new JPanel();
        this.add(CheckmarksSection);
        CheckmarksSection.setBackground(Color.DARK_GRAY);
        CheckmarksSection.setBounds(450, 0, 100, 450);
        CheckmarksSection.setLayout(new BorderLayout());

        JPanel SubmissionSection = new JPanel();
        this.add(SubmissionSection);
        SubmissionSection.setBackground(Color.LIGHT_GRAY);
        SubmissionSection.setBounds(550, 0, 450, 450);
        SubmissionSection.setLayout(new BorderLayout());

        JPanel GradingSection = new JPanel();
        this.add(GradingSection);
        GradingSection.setBackground(Color.GRAY);
        GradingSection.setBounds(0, 450, 1000, 150);
        GradingSection.setLayout(new BorderLayout());

        // ------------------------------------------------------------------------

        JLabel AnswerHeading = new JLabel();
        AnswerSection.add(AnswerHeading);
        AnswerHeading.setText("ANSWER FILE");
        AnswerHeading.setHorizontalAlignment(JLabel.CENTER);
        AnswerHeading.setVerticalAlignment(JLabel.TOP);

        JLabel SubmissionHeading = new JLabel();
        SubmissionSection.add(SubmissionHeading);
        SubmissionHeading.setText("SUBMISSION FILE");
        SubmissionHeading.setHorizontalAlignment(JLabel.CENTER);
        SubmissionHeading.setVerticalAlignment(JLabel.TOP);
        

        // this.pack();
		this.setVisible(true);
    }
}
