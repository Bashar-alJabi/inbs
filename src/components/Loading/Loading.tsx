import styles from './Loading.module.css';
import Lottie from 'lottie-react';
import LoadingAnim from '../../Anim/LoadingAnim.json';

const Loading = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-dvh bg-[#EAEAEA] ">
            <Lottie animationData={LoadingAnim} className="w-44 mx-auto" />
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loading;
