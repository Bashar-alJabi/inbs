import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
                <motion.h1
                    className="text-9xl font-bold text-primary"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    404
                </motion.h1>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
                    <p className="text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>

                    <Button onClick={() => navigate('/')} size="lg" className="hover:scale-105 transition-transform">
                        Return Home
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
