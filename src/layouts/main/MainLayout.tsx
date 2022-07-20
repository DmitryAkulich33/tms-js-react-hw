import React, {PropsWithChildren} from "react";

import {Footer, Header} from "../components";

const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export {MainLayout};