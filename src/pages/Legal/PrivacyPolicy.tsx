import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {

    const { t } = useTranslation();

    return (
        <div className="container mx-auto pt-28 pb-16 px-6 text-left min-h-screen">
            <h1 className="text-3xl font-bold mb-4">{t("PrivacyPolicy")}</h1>
            <p className="mb-4">
                {t("PrivD")}
            </p>

            <h2 className="text-xl font-semibold mt-4">{t("Priv1T")}</h2>
            <p>
                {t("Priv1D")}
            </p>

            <h2 className="text-xl font-semibold mt-4">{t("Priv2T")}</h2>
            <p>
                {t("Priv2D")}
            </p>

            <h2 className="text-xl font-semibold mt-4">{t("Priv3T")}</h2>
            <p>{t("Priv3D")}</p>

            <h2 className="text-xl font-semibold mt-4">{t("Priv4T")}</h2>
            <p>
                {t("Priv4D")}{' '}
                <a href="mailto:info@inbs-uae.com" className="text-blue-600">
                    info@inbs-uae.com
                </a>
                .
            </p>

            <h2 className="text-xl font-semibold mt-4">{t("Priv5T")}</h2>
            <p>{t("Priv5D")}</p>

            <Link to="/" className="text-blue-600 mt-6 block">
                {t("BackHomeButton")}
            </Link>
        </div>
    );
};

export default PrivacyPolicy;