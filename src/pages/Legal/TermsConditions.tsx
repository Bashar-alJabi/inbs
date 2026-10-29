import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TermsConditions = () => {

    const { t } = useTranslation();

    return (
        <div className="container mx-auto pt-28 pb-16 px-6 text-left min-h-screen">
            <h1 className="text-3xl font-bold mb-4">{t("Terms&Conditions")}</h1>
            <p className="mb-4">{t("tcD")}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t("tc1T")}</h2>
            <p>{t("tc1D")}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t("tc2T")}</h2>
            <p>{t("tc2D")}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t("tc3T")}</h2>
            <p>{t("tc3D")}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t("tc4T")}</h2>
            <p>{t("tc4D")}</p>
            
            <h2 className="text-xl font-semibold mt-4">{t("tc5T")}</h2>
            <p>{t("tc5D")}</p>
            
            <Link to="/" className="text-blue-600 mt-6 block">{t("BackHomeButton")}</Link>
        </div>
    );
};

export default TermsConditions;