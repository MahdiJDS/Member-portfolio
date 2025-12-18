import { Menu, X } from 'lucide-react';
import { useState } from 'react';


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b-[1px] rounded-b-lg shadow-2xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Taha
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 text-white">
                        <button
                            onClick={() => scrollToSection('home')}
                            className=" hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className=" hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className=" hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className=" hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-slate-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-slate-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className="text-slate-700 hover:text-blue-600 transition-colors text-left cursor-pointer"
                            >
                                Skills
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
