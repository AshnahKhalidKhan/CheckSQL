import javax.swing.*;
import java.awt.*;

public class Screen extends JFrame
{
    Screen()
    {
        this.setTitle("CheckSQL");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(1000, 600);
		this.setResizable(false);
		this.setLocationRelativeTo(null);
		ImageIcon icon = new ImageIcon("Checkmark.png");
		this.setIconImage(icon.getImage());
		this.getContentPane().setBackground(new Color(0x8766FF));
		this.setVisible(true);
    }
}
