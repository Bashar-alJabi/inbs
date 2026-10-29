import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/Theme/mode-toggle';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Languages from '@/components/Languages/Languages';
import { useState } from 'react';

const Header = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: t('Home'), href: '/' },
        { name: t('About'), href: '/about' },
        { name: t('Services'), href: '/services' },
        { name: t('Team'), href: '/team' },
        { name: t('Contact'), href: '/contact' },
        { name: t('Careers'), href: '/careers' },
    ];

    return (
        <header className="fixed w-full top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
            <div className="container w-full mx-auto px-4 flex h-16 items-center justify-between">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/Images/logo.png" alt="logo" className="w-24 h-12" />
                    </Link>
                </motion.div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {navItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link to={item.href} className="inline-block px-2 py-1 font-medium rounded-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                                        {item.name}
                                    </Link>
                                </motion.div>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <div className='flex items-center justify-center'>
                        <Languages />
                        <ModeToggle />
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger className="md:hidden group flex justify-end" aria-label="Open menu">
                            <Menu className="w-6 h-6 hover:text-primary transition-transform duration-300 group-hover:rotate-180" />
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-lg border-l">
                            <SheetHeader className="space-y-2">
                                <SheetTitle className="text-3xl font-bold bg-gradient-to-r from-primary to primary/60 bg-clip-text text-transparent">
                                    INBS
                                </SheetTitle>
                                <SheetDescription className="text-muted-foreground italic">{t('INBS')}</SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-6 mt-8">
                                {navItems.map((item, index) => (
                                    <Link 
                                        to={item.href} 
                                        key={index} 
                                        className="text-lg font-medium relative group overflow-hidden w-fit"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">{item.name}</span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
