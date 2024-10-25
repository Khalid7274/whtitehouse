
const HeaderMessage = ({imageSrc,title,altText,profileUrl}) => {
    return (
        <>
        <img src={imageSrc} alt={altText}/>
        <h3><a href={profileUrl}>{title}</a></h3>
        </>
    )
};

export default HeaderMessage;
