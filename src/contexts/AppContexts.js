import { createContext, useState } from "react";

export const AppContextData = createContext();

const AppContext = (props) => {

    const [appData, setAppData] = useState({
        showTerminal: false,
    })

    return (
        <AppContextData.Provider value={{appData, setAppData}}>{props.children}</AppContextData.Provider>
    );
}

AppContext.defaultProps = {
    children: ""
};

export default AppContext;