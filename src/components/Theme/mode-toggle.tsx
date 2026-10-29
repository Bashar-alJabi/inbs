import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme-provider';
import { motion } from 'framer-motion';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light');
    };

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={cycleTheme}
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
            <motion.div
                initial={{ opacity: 0,  rotate: 0, scale: 0 }}
                animate={{ opacity: theme === 'dark' ? 0 : 1, rotate: theme === 'dark' ? -90 : 360, scale: theme === 'dark' ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <Sun style={{width: "1rem"}} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, rotate: 90, scale: 0 }}
                animate={{ opacity: theme === 'light' ? 0 : 1, rotate: theme === 'light' ? 90 : 360, scale: theme === 'light' ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute"
            >
                <Moon style={{width: "1rem"}} />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
