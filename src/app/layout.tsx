<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> da0bf08 (style: 채팅방 CSS 수정)
import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
<<<<<<< HEAD
=======
import './globals.css';
import { Inter } from 'next/font/google';
>>>>>>> e93b175 (install)
=======
>>>>>>> c3944ec (feat: Header, Profile 컴포넌트 생성)

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="w-full h-screen max-w-xl mx-auto overflow-hidden bg-white">
          <Header />
=======
        <div className="w-full h-screen max-w-xl mx-auto bg-white">
>>>>>>> da0bf08 (style: 채팅방 CSS 수정)
=======
        <div className="w-full h-screen max-w-xl mx-auto overflow-hidden bg-white">
          <Header />
>>>>>>> c3944ec (feat: Header, Profile 컴포넌트 생성)
          {children}
        </div>
      </body>
    </html>
  );
}
