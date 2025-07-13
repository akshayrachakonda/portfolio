'use client';
import StarBackground from '@/components/StarBackground';
import UniverseCard from '@/components/UniverseCard';

export default function UniversePage() {
  const links = [
    {
      title: '🚀 Projects',
      description: 'Explore my full-stack builds and creative frontend work.',
      route: '/projects',
    },
    {
      title: '🛰 Experience',
      description: 'My developer journey, roles and achievements.',
      route: '/experience',
    },
    {
      title: '🧬 About Me',
      description: 'Who I am, my story and purpose.',
      route: '/about',
    },
    {
      title: '📄 Resume',
      description: 'Download or view my resume in one click.',
      route: '/resume',
    },
    {
      title: '📡 Contact',
      description: 'Let’s connect and collaborate!',
      route: '/contact',
    },
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
        <StarBackground/>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-300">
        🪐 Welcome to My Universe
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {links.map((link, index) => (
          <UniverseCard
            key={index}
            title={link.title}
            description={link.description}
            route={link.route}
          />
        ))}
      </div>
    </main>
  );
}
