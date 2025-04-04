import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '공학 학생 포트폴리오',
  description: '공학을 공부하는 학생의 포트폴리오 웹사이트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="fixed w-full glass-effect z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Engineering Portfolio
              </a>
              <div className="flex gap-6">
                <a href="#about" className="hover:text-green-300 transition">소개</a>
                <a href="#projects" className="hover:text-blue-300 transition">프로젝트</a>
                <a href="#skills" className="hover:text-purple-300 transition">기술</a>
                <a href="#contact" className="hover:text-green-300 transition">연락처</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
} 