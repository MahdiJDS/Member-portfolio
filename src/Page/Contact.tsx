import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type InfoItemProps = {
    icon: LucideIcon;
    text: string;
};

function InfoItem({ icon: Icon, text }: InfoItemProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="text-gray-300">{text}</span>
        </div>
    );
}


export default function ContactUs() {
    return (
        <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
            {/* background glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -right-40 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Let’s <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-lg mb-10">
                        Have an idea, a project, or just want to say hello?
                        I’m always open to discussing new opportunities and collaborations.
                    </p>

                    <div className="space-y-6">
                        <InfoItem icon={Mail} text="tg.ghazi84@gmail.com" />
                        <InfoItem icon={Phone} text="98 996 050 5385" />
                        <InfoItem icon={MapPin} text="Iran" />
                    </div>
                </div>

                {/* Right */}
                <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <input type="text" placeholder="Your Name" className="input" />
                        <input type="email" placeholder="Your Email" className="input" />
                    </div>

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="input mb-6 resize-none"
                    />

                    <button
                        type="submit"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 font-semibold hover:scale-[1.02] transition-transform shadow-lg"
                    >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </section>
    );
}

// function InfoItem({ icon: Icon, text }) {
//   return (
//     <div className="flex items-center gap-4">
//       <div className="p-3 rounded-xl bg-white/5 border border-white/10">
//         <Icon className="w-5 h-5 text-indigo-400" />
//       </div>
//       <span className="text-gray-300">{text}</span>
//     </div>
//   );
// }

