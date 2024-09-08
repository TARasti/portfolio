import { useNavigate } from "react-router-dom";
import { ROUTES_PREFIX } from "../constants";

export const useNavigateTo = () => {
    const navigate = useNavigate();
    return (link = '/') => {
        navigate(`${ROUTES_PREFIX}${link}`);
    };
};