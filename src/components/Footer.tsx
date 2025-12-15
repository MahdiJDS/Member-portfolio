import { Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                {/* بخش معرفی مختصر */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Taha ghazi</h3>
                    <p className="text-sm max-w-xs">
                          Driven to build games that are not just playable, but memorable where mechanics, design.
                    </p>
                </div>

                <div className="flex space-x-6 text-2xl">
                    <a
                        href="tel:+989960505385"
                        className="text-blue-500 dark:text-gray-100 hover:text-blue-700 dark:hover:text-gray-300 transition text-3xl"
                        aria-label="Call Me"
                    >
                        <Phone />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tg.ghazi84@gmail.com"
                        target="_blank"
                        aria-label="Email"
                        className="hover:text-red-600 dark:hover:text-red-400 transition"
                    >
                        <Mail />
                    </a>
                </div>

            </div>

            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Taha ghazi. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
