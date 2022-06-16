import React from "react";
import * as Constants from "../../constants/variables"

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <p className="pull-left">
                {Constants.FOOTER_LEFT_TEXT}
            </p>
            <p className="pull-right">
                {Constants.FOOTER_RIGHT_TEXT}
                <a target="_blank" href="https://www.wowthemes.net">WowThemes.net</a>
            </p>
            <div className="clearfix">
            </div>
        </div>
    )
}

export default Footer;