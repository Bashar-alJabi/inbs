import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const animationDuration = 2000; // 2 seconds for all counters
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(animationDuration / frameDuration);

        const animate = (counter: Element) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            let frame = 0;
            const updateCounter = () => {
                frame++;
                // Using easeOutQuad easing function for smoother animation
                const progress = frame / totalFrames;
                const easing = -progress * (progress - 2);
                const currentCount = Math.round(target * easing);
                counter.textContent = currentCount.toString();
                if (frame < totalFrames) {
                    requestAnimationFrame(updateCounter);
                }
            };
            requestAnimationFrame(updateCounter);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 0.25 // Start animation when 25% of element is visible
        });
        counters.forEach(counter => observer.observe(counter));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/Images/experience-bg.jpg")' }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
                    {/* Experience Column 1 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{t('ExperienceYears')}</h3>
                        <p className="text-4xl font-bold flex items-center justify-center">
                            <span className="text-primary">+</span>
                            <span className="counter" data-target="25">
                                0
                            </span>
                        </p>
                    </div>

                    {/* Experience Column 2 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{t('AwardsWon')}</h3>
                        <p className="text-4xl font-bold flex items-center justify-center">
                            <span className="text-primary">+</span>
                            <span className="counter" data-target="30">
                                0
                            </span>
                        </p>
                    </div>

                    {/* Experience Column 3 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{t('ProjectsCompleted')}</h3>
                        <p className="text-4xl font-bold flex items-center justify-center">
                            <span className="text-primary">+</span>
                            <span className="counter" data-target="85">
                                0
                            </span>
                        </p>
                    </div>

                    {/* Experience Column 4 */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{t('HappyClients')}</h3>
                        <p className="text-4xl font-bold flex items-center justify-center">
                            <span className="text-primary">+</span>
                            <span className="counter" data-target="25320">
                                0
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
