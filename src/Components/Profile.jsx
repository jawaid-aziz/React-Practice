export const Profile = () => {
    return(
        <div style={{display:"flex"}}>
            <div style={{paddingInline:"30px"}}>
            <img style={{height:"200px", width:"200px"}} src={require('./profile1.jpg')}/>
            </div>
            <div style={{paddingBlock:"0"}}>
            <h3>Name:</h3>
            <h4>Javaid Memon</h4>
            <h3>Holding:</h3>
            <h4>Batman</h4>
            </div>
        </div>
    );
};