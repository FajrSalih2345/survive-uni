'use client';

import React, { useState } from 'react';
import { SCENARIOS, Choice } from '@/data/scenarios';

export default function HomePage() {
  const [money, setMoney] = useState<number>(50);
  const [time, setTime] = useState<number>(50);
  const [sanity, setSanity] = useState<number>(50);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const clamp = (val: number, min = 0, max = 100) => Math.min(max, Math.max(min, val));

  const handleChoice = (choice: Choice) => {
    setMoney((prev) => clamp(prev + choice.impact.money));
    setTime((prev) => clamp(prev + choice.impact.time));
    setSanity((prev) => clamp(prev + choice.impact.sanity));
    setCurrentIndex((prev) => prev + 1);
  };

  const restartGame = () => {
    setMoney(50);
    setTime(50);
    setSanity(50);
    setCurrentIndex(0);
  };

  const isGameOver = currentIndex >= SCENARIOS.length || money <= 0 || time <= 0 || sanity <= 0;
  const currentScenario = SCENARIOS[currentIndex];

  const getSurvivalRank = () => {
    if (money > 50 && time > 50 && sanity > 50) {
      return {
        rank: "Dean's List Legend",
        grade: "A+",
        badgeColor: "from-amber-400 to-yellow-500",
        textColor: "text-amber-400",
        borderColor: "border-amber-500/30",
        bgColor: "bg-amber-950/30",
        description: "Unbelievable balance! You conquered college life with flying colors.",
      };
    }

    const minStat = Math.min(money, time, sanity);

    if (minStat === money) {
      return {
        rank: "Financially Ruined Scholar",
        grade: money <= 0 ? "F" : "C-",
        badgeColor: "from-emerald-400 to-teal-500",
        textColor: "text-emerald-400",
        borderColor: "border-emerald-500/30",
        bgColor: "bg-emerald-950/30",
        description: "You made it through the semester, but your bank account is in critical care.",
      };
    }

    if (minStat === time) {
      return {
        rank: "Chronically Tardy Sleeper",
        grade: time <= 0 ? "F" : "C",
        badgeColor: "from-amber-400 to-orange-500",
        textColor: "text-amber-400",
        borderColor: "border-amber-500/30",
        bgColor: "bg-amber-950/30",
        description: "Time slipped away like water. Alarm clocks are now your worst enemy.",
      };
    }

    return {
      rank: "Caffeine-Powered Phantom",
      grade: sanity <= 0 ? "F" : "C+",
      badgeColor: "from-purple-400 to-pink-500",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-950/30",
      description: "You survived on 90% espresso and 10% pure panic. Take a long nap!",
    };
  };

  const rankInfo = isGameOver ? getSurvivalRank() : null;

  const formatStatImpact = (value: number, prefix: string, suffix: string = '') => {
    if (value === 0) return null;
    const sign = value > 0 ? '+' : '';
    const colorClass = value > 0 ? 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' : 'text-rose-400 border-rose-500/30 bg-rose-950/40';
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${colorClass}`}>
        {sign}{value}{suffix} {prefix}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Main Container */}
      <div className="w-full max-w-xl flex flex-col flex-1 gap-6 my-auto">

        {/* Header */}
        <header className="text-center space-y-1 py-2 border-b border-slate-800 pb-4">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-medium uppercase tracking-wider mb-1">
            College Survival Simulator
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Survive Uni
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Can you survive 10 college scenarios without crashing?
          </p>
        </header>

        {/* Top Stat Bars */}
        <section className="grid grid-cols-3 gap-2 sm:gap-3 bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800 shadow-xl backdrop-blur-sm">
          {/* Money Bar */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>💵 Money</span>
              <span>${money}/100</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
              <div
                className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${money}%` }}
              />
            </div>
          </div>

          {/* Time Bar */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>⏳ Time</span>
              <span>{time}/100</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
              <div
                className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${time}%` }}
              />
            </div>
          </div>

          {/* Sanity Bar */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-purple-400">
              <span>🧠 Sanity</span>
              <span>{sanity}/100</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
              <div
                className="bg-purple-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${sanity}%` }}
              />
            </div>
          </div>
        </section>

        {/* Active Game Section OR Celebratory Report Card */}
        {!isGameOver && currentScenario ? (
          <section className="flex flex-col gap-5 flex-1 justify-center">
            {/* Scenario Card */}
            <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-medium text-slate-400 border-b border-slate-800/80 pb-3">
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">
                  Scenario {currentScenario.id} of {SCENARIOS.length}
                </span>
                <span className="text-indigo-400">Progress: {Math.round((currentIndex / SCENARIOS.length) * 100)}%</span>
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium pt-1">
                {currentScenario.description}
              </p>
            </div>

            {/* Choice Buttons */}
            <div className="grid grid-cols-1 gap-3.5">
              {currentScenario.choices.map((choice: Choice, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleChoice(choice)}
                  className="group relative w-full text-left bg-slate-900 hover:bg-slate-800/90 active:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-4 sm:p-5 transition-all duration-200 shadow-lg hover:shadow-indigo-500/5 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-100 text-sm sm:text-base group-hover:text-indigo-300 transition-colors">
                      {choice.label}
                    </span>
                  </div>

                  {/* Impact Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {formatStatImpact(choice.impact.money, 'Money')}
                    {formatStatImpact(choice.impact.time, 'Time', 'h')}
                    {formatStatImpact(choice.impact.sanity, 'Sanity', '%')}
                  </div>
                </button>
              ))}
            </div>
          </section>
        ) : (
          /* Report Card Screen */
          rankInfo && (
            <section className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 text-center my-auto">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-700">
                  📜 Official Report Card
                </span>

                {/* Letter Grade */}
                <div className={`text-6xl sm:text-7xl font-black ${rankInfo.textColor}`}>
                  {rankInfo.grade}
                </div>

                {/* Survival Rank Title */}
                <div className={`p-3 rounded-xl border ${rankInfo.bgColor} ${rankInfo.borderColor} space-y-1`}>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Survival Rank</p>
                  <h2 className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${rankInfo.badgeColor} bg-clip-text text-transparent`}>
                    {rankInfo.rank}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  {rankInfo.description}
                </p>
              </div>

              {/* Final Scores Breakdown */}
              <div className="grid grid-cols-3 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 font-medium">Final Money</span>
                  <span className="text-lg font-extrabold text-emerald-400">${money}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 font-medium">Final Time</span>
                  <span className="text-lg font-extrabold text-amber-400">{time}/100</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 font-medium">Final Sanity</span>
                  <span className="text-lg font-extrabold text-purple-400">{sanity}%</span>
                </div>
              </div>

              {/* Prominent Play Again Button */}
              <button
                onClick={restartGame}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-indigo-500/20 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                🔄 Play Again (New Semester)
              </button>
            </section>
          )
        )}

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 py-2">
          Survive Uni &bull; Created with Next.js & Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
