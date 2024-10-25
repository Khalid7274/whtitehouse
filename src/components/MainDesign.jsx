

const MyContent =({imageSrc,altTxt,imgUrl,headerTxt,headerUrl})=>{
return(
    <>
    <a href={imgUrl}>
        <img src={imageSrc} alt={altTxt}/>
        </a>
    <h1><a href={headerUrl}>{headerTxt}</a></h1>
    </>
)
}

export default MyContent;