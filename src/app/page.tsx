import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-32">
        <section className="text-center glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            전기전자공학 & 이차전지 융합
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            지속가능한 에너지 솔루션을 연구하는 공학도입니다
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition backdrop-blur-sm">
              프로젝트 보기
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition backdrop-blur-sm">
              연락하기
            </a>
          </div>
        </section>

        <section id="about" className="mt-32">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">소개</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">학력</h3>
                <p className="text-gray-200">
                  울산대학교 전기공학부<br />
                  • 전기전자공학전공 (주전공)<br />
                  • 이차전지융합학부 (복수전공)<br />
                  4학년 재학 중
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">관심 분야</h3>
                <p className="text-gray-200">
                  • 이차전지 시스템 설계 및 최적화<br />
                  • 에너지 저장 시스템 (ESS)<br />
                  • 전기차 배터리 관리 시스템 (BMS)<br />
                  • 지속가능한 에너지 솔루션
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-32">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">프로젝트 & 경험</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">캡스톤 디자인</h3>
                <p className="text-gray-200">
                  • [프로젝트 제목]<br />
                  • [프로젝트 설명]<br />
                  • [사용 기술/도구]<br />
                  • [주요 성과]
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">하계 연구 인턴십</h3>
                <p className="text-gray-200">
                  • [연구 기관/회사]<br />
                  • [연구 주제]<br />
                  • [담당 역할]<br />
                  • [학습 내용]
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">이차전지 생산공정 직무 부트캠프</h3>
                <p className="text-gray-200">
                  • [교육 내용]<br />
                  • [실습 프로젝트]<br />
                  • [획득한 기술]<br />
                  • [성과/인증]
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">해외 현장체험학습</h3>
                <p className="text-gray-200">
                  • [방문 국가/기관]<br />
                  • [학습 내용]<br />
                  • [경험한 기술/시설]<br />
                  • [획득한 인사이트]
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 