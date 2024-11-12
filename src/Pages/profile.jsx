import Text from "../components/text";
import AllLink from "../components/link";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
      <div className="profile-container"> 
        <Navbar currentPageLink="/profile" />

        <div>Profile page</div>
      </div>
    );
  };
  
  export default Profile;