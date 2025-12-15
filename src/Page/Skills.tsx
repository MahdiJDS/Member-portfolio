import {
    Code,
    Database,
    Boxes ,
    Palette,
} from 'lucide-react';

export default function Skills() {
    const technicalSkills = [
        { name: "Unity", icon:Boxes  },
        { name: "C#", icon: Code },
        { name: "C++", icon:Database },
        { name: "Ui Designer", icon: Palette },

    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {technicalSkills.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="  relative p-6 rounded-2xl
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
                group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl text-white">{category.name}</h3>
                            </div>

                        
                        </div>
                    ))}
                </div>
             
            </div>
        </section>
    );
}
