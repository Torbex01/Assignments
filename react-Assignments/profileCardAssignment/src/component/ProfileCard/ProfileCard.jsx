const ProfileCard = (Props)=>{
    return(
      <div className= {`profilecard ${Props.theme}`}>
        <div className="imageSpace">
        <img src={Props.image} alt="profilepicture" />
        </div>
        <h3 className="name"> {Props.name}</h3>
        <h3>Age: {Props.age} </h3>
        <h4> Branch: {Props.location}</h4>


      </div>
    )
  }
  
  export default ProfileCard
  