
const Core =({image,title,desscription})=>{
return(
    <>
    <div className="core-grid">
    <img src={image}/>
    <h2>{title}</h2>
    <p>{desscription}</p>
    </div>
    </>
);

}

export default Core;