import Text from "../components/text";
import RegisterForm from "../components/registerform";

const Register = () => {
    return (
      <div>
        <br></br><br></br><br></br><br></br>
        <div className="mx-auto max-w-3xl text-center">
          <Text 
                title2="Unlock Exclusive Benefits: Register with Us"
                text="Are you ready to embark on a journey of a lifetime? We invite you to take the first step towards extraordinary travel experiences. Register with us and open the door to a world of exclusive benefits and personalized adventures."
            />
      </div>
      <br></br><br></br><br></br><br></br>

        <RegisterForm></RegisterForm>
      </div>
    );
  };
  
  export default Register;