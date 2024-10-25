const Theader = ({ tlinks, linkText, logoText, logoLink, hlogo, hlogolink, menuText,menulink}) => {
    return (
        <>
            <h2><a href={logoLink}>{logoText}</a></h2>
            <h3><a href={tlinks}>{linkText}</a></h3>
            <a href={hlogolink}>
                <img src={hlogo} style={{ maxWidth: '100%', height: 'auto' }} />
            </a>
            <h4><a href={menulink}>{menuText}</a></h4>
        </>
    );
};

export default Theader;
