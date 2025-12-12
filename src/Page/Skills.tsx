import {
    Code2,
    Smartphone,
    Database,
    GitBranch,
    Palette,
    Server
} from 'lucide-react';

export default function Skills() {
    const technicalSkills = [
        { name: "HTML5", icon:Code2 , level: 95 },
        { name: "CSS3", icon: Smartphone, level: 90 },
        { name: "JavaScript (ES6+)", icon:Database , level: 85 },

        // Front-end Core
        { name: "React.js", icon: GitBranch, level: 85 },
        { name: "React Router", icon: Palette, level: 85 },
        { name: "Redux Toolkit", icon: Server, level: 85 },

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
                            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl text-slate-800">{category.name}</h3>
                            </div>

                            {/* <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-700">{skill.name}</span>
                                            <span className="text-slate-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Tools & Technologies
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl text-center mb-8 text-slate-800">
                        Tools & Technologies
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                    <tool.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <span className="text-slate-700 text-center">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div> */}

             
            </div>
        </section>
    );
}
