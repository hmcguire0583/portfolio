import './globals.css';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';

export const metadata = {
  title: 'Portfolio - Harry McGuire',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}