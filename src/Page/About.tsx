import { Code2, Palette, Rocket, Users } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces.',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text  mb-4">
            About Me
          </h2>
          <p className=" max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1595745688820-1a8bca9dd00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTQ1NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About me"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className=" leading-relaxed">
              Hello! I'm a full-stack developer with over 5 years of experience in building web applications. 
              I specialize in React, TypeScript, and modern web technologies.
            </p>
            <p className=" leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. 
              Today, I've had the privilege of working on diverse projects ranging from startups to large-scale 
              enterprise applications.
            </p>
            <p className=" leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className=" text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className=" text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  30+
                </div>
                <div className=" text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
