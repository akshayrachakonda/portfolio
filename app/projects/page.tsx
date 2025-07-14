'use client';
import ProjectCard from '@/components/ProjectCard';
import StarBackground from '@/components/StarBackground';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <StarBackground />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-8 text-purple-300">
        🚀 Project Constellation
      </h1>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        <ProjectCard
          title="Course Enrollment"
          description="A full-stack course platform for students and admins to manage enrollments, using React, Express, MongoDB, and Node.js."
          stack={['React', 'Express', 'MongoDB', 'Node.js']}
          liveLink="https://course-enrollment-one.vercel.app/"
          repoLink ="https://github.com/akshayrachakonda/course_enrollment"
        />
        <ProjectCard
          title="Mill Cart"
          description="An e-commerce portal for B2B bulk purchase from factories, connecting kirana stores and wholesalers directly to suppliers."
          stack={['React', 'Express', 'MongoDB', 'Node.js']}
          repoLink="https://github.com/akshayrachakonda/mill-cart"
        />
        <ProjectCard
          title="Portfolio"
          description="Galaxy based portfolio."
          stack={['Type Script', 'Material UI', 'Next Js', 'Node.js']}
          liveLink="https://akshay-rachakonda-portfolio.vercel.app/"
          repoLink ="https://github.com/akshayrachakonda/portfolio"
        />
        <ProjectCard
          title="HackerRank Automation Bot"
          description="Built an automation script using Node.js and Puppeteer to log into HackerRank and navigate coding challenges."
          stack={['Java Script', 'Puppeteer']}
          // liveLink="https://akshay-rachakonda-portfolio.vercel.app/"
          // repoLink ="https://github.com/akshayrachakonda/portfolio"
        />
      </div>
    </main>
  );
}
