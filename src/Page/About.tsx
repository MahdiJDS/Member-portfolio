import { Code2, Palette, Rocket, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Maintainable, scalable, and readable code with best practices.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Modern, intuitive interfaces focused on user experience.",
    },
    {
      icon: Rocket,
      title: "High Performance",
      description: "Optimized gameplay systems and responsive interactions.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaboration with designers and developers.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute top-2/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Game developer focused on gameplay systems, mechanics, and
            player-driven experiences.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-24">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Hello! I’m a game developer passionate about creating meaningful and
            engaging gameplay experiences. I focus on gameplay systems,
            mechanics design, and transforming ideas into playable content.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            My journey started with curiosity about how games work under the
            hood — from player input to core systems. Over time, I’ve built
            prototypes and projects that balance design, code, and player
            experience.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Outside development, I explore new mechanics, refine prototypes, and
            study game design to constantly improve my craft.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                relative p-6 rounded-2xl
                bg-white/80 dark:bg-[#0b1220]/80
                backdrop-blur-xl
                [box-shadow:
                0_1px_1px_rgba(255,255,255,0.4),
                0_20px_60px_rgba(59,130,246,0.18),
                0_40px_120px_rgba(0,0,0,0.35)]
                hover:[box-shadow:
                0_1px_1px_rgba(255,255,255,0.6),
                0_30px_90px_rgba(99,102,241,0.35),
                0_60px_160px_rgba(0,0,0,0.45)]
                transition-all duration-500
                group
              "
            >
              <div
                className="
                  w-12 h-12 mb-4 rounded-xl
                  bg-gradient-to-br from-blue-500 to-purple-500
                  flex items-center justify-center
                  shadow-lg
                  group-hover:scale-110 transition-transform duration-300
                "
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
