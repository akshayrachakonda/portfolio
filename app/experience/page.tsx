'use client';
import ExperienceCard from '@/components/ExperienceCard';
import StarBackground from '@/components/StarBackground';
export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-black text-white">
        <StarBackground />
      <h1 className="text-4xl font-bold text-purple-300 mb-12 mt-8 text-center">🛰 Experience</h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        <ExperienceCard
          company="EventAura"
          role="Frontend Developer"
          tech="Next.js, TypeScript"
          date="July 2024 – Present"
        />
        <ExperienceCard
          company="Reliance Foundation"
          role="Student Mentor"
          tech="Mentorship Program"
          date="July 2024 - Present"
        />
      </div>
    </main>
  );
}
