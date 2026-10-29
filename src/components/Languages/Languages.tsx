import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

const Languages = () => {
    const { t, i18n } = useTranslation();
    const [rotate, setRotate] = useState(0);

    const languages = [
        { name: t('English'), code: 'en' },
        { name: t('Arabic'), code: 'ar' },
    ];

    const handleLanguageChange = (code: string) => {
        setRotate(rotate + 360);
        i18n.changeLanguage(code);
        localStorage.setItem('preferredLanguage', code);
        // document.documentElement.lang = code === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                        <motion.div initial={{ rotate: 360 }} animate={{ rotate }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                            <Globe style={{width: "0.9rem"}} />
                        </motion.div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="cursor-pointer">
                            {lang.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Languages;