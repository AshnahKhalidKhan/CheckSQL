// import javax.swing.*;
// import java.awt.*;
// import javax.swing.border.Border;

// import java.awt.event.ActionEvent;
// import java.awt.event.ActionListener;

// public class Screen extends JFrame implements ActionListener
// {
//     JButton Checkmark;

//     Screen()
//     {
//         // Location/size
//         this.setTitle("CheckSQL");
// 		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
// 		this.setSize(1000, 600);
// 		this.setResizable(false);
// 		this.setLocationRelativeTo(null);
//         this.setLayout(null);
//         // Color, icon
// 		ImageIcon icon = new ImageIcon("Checkmark.png");
// 		this.setIconImage(icon.getImage());
// 		this.getContentPane().setBackground(new Color(0x8766FF));
//         // Text
//         // Border border = BorderFactory.createLineBorder(Color.RED, 10);
//         // JLabel heading = new JLabel();
//         // heading.setText("Submission");
//         // heading.setBounds(0, 0, 500, 300);
//         // heading.setHorizontalAlignment(JLabel.LEFT); //JLabel.LEFT or JLabel.RIGHT of ImageIcon
//         // heading.setVerticalAlignment(JLabel.TOP); //JLabel.CENTER or JLabel.BOTTOM of ImageIcon
//         // heading.setHorizontalTextPosition(JLabel.CENTER); //JLabel.LEFT or JLabel.RIGHT of ImageIcon
//         // heading.setVerticalTextPosition(JLabel.TOP); //JLabel.CENTER or JLabel.BOTTOM of ImageIcon
//         // heading.setForeground(new Color(0x00FFFF));
//         // heading.setFont(new Font("Calibri", Font.PLAIN, 20));
//         // heading.setIconTextGap(50);
//         // heading.setBackground(Color.BLACK);
//         // heading.setOpaque(true);
//         // heading.setBorder(border);
//         // this.add(heading);
//         // ImageIcon image = new ImageIcon("Checkmark.png");
//         // heading.setIcon(image);

//         // ----------------------------------------------------------------
        
//         JPanel AnswerSection = new JPanel();
//         this.add(AnswerSection);
//         AnswerSection.setBackground(Color.LIGHT_GRAY);
//         AnswerSection.setBounds(0, 0, 450, 450);
//         AnswerSection.setLayout(new BorderLayout());

//         JPanel CheckmarksSection = new JPanel();
//         this.add(CheckmarksSection);
//         CheckmarksSection.setBackground(Color.DARK_GRAY);
//         CheckmarksSection.setBounds(450, 0, 100, 450);
//         CheckmarksSection.setLayout(new BorderLayout());

//         JPanel SubmissionSection = new JPanel();
//         this.add(SubmissionSection);
//         SubmissionSection.setBackground(Color.LIGHT_GRAY);
//         SubmissionSection.setBounds(550, 0, 450, 450);
//         SubmissionSection.setLayout(new BorderLayout());

//         JPanel GradingSection = new JPanel();
//         this.add(GradingSection);
//         GradingSection.setBackground(Color.GRAY);
//         GradingSection.setBounds(0, 450, 1000, 150);
//         GradingSection.setLayout(new BorderLayout());

//         // ------------------------------------------------------------------------

//         JLabel AnswerHeading = new JLabel();
//         AnswerSection.add(AnswerHeading);
//         AnswerHeading.setText("ANSWER FILE");
//         AnswerHeading.setHorizontalAlignment(JLabel.CENTER);
//         AnswerHeading.setVerticalAlignment(JLabel.TOP);

//         JLabel SubmissionHeading = new JLabel();
//         SubmissionSection.add(SubmissionHeading);
//         SubmissionHeading.setText("SUBMISSION FILE");
//         SubmissionHeading.setHorizontalAlignment(JLabel.CENTER);
//         SubmissionHeading.setVerticalAlignment(JLabel.TOP);

//         // ------------------------------------------------------------------------

//         Checkmark = new JButton();
//         this.add(Checkmark);
//         Checkmark.setBounds(460, 10, 80, 50);
//         Checkmark.addActionListener(this);
//         Checkmark.setText("Button");
//         Checkmark.setHorizontalTextPosition(JButton.CENTER);
//         Checkmark.setVerticalTextPosition(JButton.CENTER);
//         Checkmark.setFont(new Font("Comic Sans", Font.BOLD, 10));
//         Checkmark.setForeground(Color.CYAN);
//         Checkmark.setBackground(Color.DARK_GRAY);
//         Checkmark.setBorder(BorderFactory.createDashedBorder(Color.WHITE));
//         Checkmark.setFocusable(false);
//         ImageIcon Tick = new ImageIcon("Tick.png");
//         Checkmark.setIcon(Tick);

//         // this.pack();
// 		this.setVisible(true);
//     }

//     @Override
//     public void actionPerformed(ActionEvent e)
//     {
//         if (e.getSource() == Checkmark)
//         {
//             System.out.println("Heyyyyyyyyyyy");
//         }
//     }
// }

import javax.swing.*;
import java.awt.*;
import java.awt.geom.RoundRectangle2D;
import java.awt.image.BufferedImage;
import java.util.ArrayList;

public class Screen extends JFrame {
    public Screen(String[] AnswerArray, String[] SubmissionsArray) {
        setTitle("Answer Display");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 400);
        setLocationRelativeTo(null);

        JPanel mainPanel = new JPanel(new GridLayout(1, 3, 10, 10));
        mainPanel.setBackground(Color.LIGHT_GRAY);
        mainPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        JPanel answerPanel = createPanel(AnswerArray);
        JPanel comparisonPanel = createComparisonPanel(AnswerArray, SubmissionsArray, answerPanel.getHeight());
        JPanel submissionPanel = createPanel(SubmissionsArray);

        mainPanel.add(answerPanel);
        mainPanel.add(comparisonPanel);
        mainPanel.add(submissionPanel);

        getContentPane().add(mainPanel);
    }

    private JPanel createPanel(String[] dataArray) {
        JPanel panel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                int width = getWidth();
                int height = getHeight();
                int arc = 20; // Adjust the arc value to change roundness

                Graphics2D g2d = (Graphics2D) g.create();
                g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
                g2d.setColor(Color.WHITE);
                g2d.fill(new RoundRectangle2D.Double(0, 0, width - 1, height - 1, arc, arc));
                g2d.setColor(Color.GREEN);
                g2d.draw(new RoundRectangle2D.Double(0, 0, width - 1, height - 1, arc, arc));
                g2d.dispose();
            }
        };

        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBackground(Color.LIGHT_GRAY);

        for (String data : dataArray) {
            JLabel label = new JLabel(data);
            label.setForeground(Color.GREEN);
            label.setAlignmentX(Component.CENTER_ALIGNMENT);
            panel.add(Box.createVerticalStrut(10)); // Spacing at the top
            panel.add(label);
            panel.add(Box.createVerticalStrut(10)); // Spacing at the bottom
        }

        return panel;
    }

    /**
     * @param AnswerArray
     * @param SubmissionsArray
     * @param panelHeight
     * @return
     */
    private JPanel createComparisonPanel(String[] AnswerArray, String[] SubmissionsArray, int panelHeight) {
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBackground(Color.LIGHT_GRAY);

        List<ImageIcon> icons = new ArrayList<>();

        // Calculate iconHeight based on the height of answerPanel
        int iconHeight = panelHeight / AnswerArray.length;  // Adjust the divisor as needed

        // Calculate iconWidth based on iconHeight to maintain aspect ratio
        int iconWidth = (int) (iconHeight * 1.5);  // Adjust the multiplier as needed

        // Compare AnswerArray and SubmissionsArray and add the appropriate image to the list
        for (int i = 0; i < AnswerArray.length; i++) {
            if (AnswerArray[i].equalsIgnoreCase(SubmissionsArray[i])) {
                icons.add(resizeImageIcon(new ImageIcon("Tick.png"), iconWidth, iconHeight));
            } else {
                icons.add(resizeImageIcon(new ImageIcon("Cross.png"), iconWidth, iconHeight));
            }
        }

        // Create JLabels with icons
        for (ImageIcon icon : icons) {
            JLabel iconLabel = new JLabel(icon);
            iconLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
            panel.add(Box.createVerticalStrut(10)); // Spacing at the top
            panel.add(iconLabel);
            panel.add(Box.createVerticalStrut(10)); // Spacing at the bottom
        }

        return panel;
    }

    private ImageIcon resizeImageIcon(ImageIcon icon, int width, int height) {
        Image image = icon.getImage();
        Image resizedImage = image.getScaledInstance(width, height, Image.SCALE_SMOOTH);
        return new ImageIcon(resizedImage);
    }

    // public static void main(String[] args) {
    //     SwingUtilities.invokeLater(() -> {
    //         String[] AnswerArray = {
    //             "Answer 1",
    //             "Answer 2",
    //             "Answer 3",
    //             "Answer 4"
    //         };

    //         String[] SubmissionsArray = {
    //             "Answer 1",
    //             "Answer 5",
    //             "Answer 3",
    //             "Answer 6"
    //         };

    //         new Screen(AnswerArray, SubmissionsArray).setVisible(true);
    //     });
    // }
}
