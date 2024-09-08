import { useContext } from "react";
import NavigationBar from "../components/NavigationBar"
import { AppContextData } from "../contexts/AppContexts";
import Terminal from "../components/Terminal";

const RenderLayout = ({ children }) => {

    const appContextData = useContext(AppContextData);

    return (
        <>
            {
                appContextData.appData.showTerminal && (
                    <Terminal />
                )
            }
            {children}
            <NavigationBar />
        </>
    )
}

export default RenderLayout;