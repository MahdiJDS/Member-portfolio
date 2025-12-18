import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = ['Home', 'About', 'Skills', 'Contact'];

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
                        {navItems.map((nav) =>
                            <button
                                onClick={() => scrollToSection('about')}
                                className=" hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                {nav}
                            </button>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white cursor-pointer"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4 text-white">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((nav) =>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className=" hover:text-blue-600 transition-colors cursor-pointer"
                                >
                                    {nav}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
