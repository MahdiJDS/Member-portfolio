import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Taha
              </h1>
              <h2 className="text-white text-2xl md:text-3xl ">
                Junior Game Developer
              </h2>
            </div>
            
            <p className="text-white text-lg">
              Driven to build games that are not just playable, but memorable where mechanics, design, and emotion work together to create real experiences.
            </p>

            {/* Social Links */}
            {/* <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="mailto:johndoe@example.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
              >
                <Mail className="w-5 h-5 text-slate-700" />
              </a>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600  rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Learn More
              </button>
              <button
               onClick={() => scrollToSection('skills')}
               className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all">
                view Skills
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY1NTM4NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              /> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
}
