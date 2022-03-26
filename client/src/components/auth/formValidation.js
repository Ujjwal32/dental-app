
export const formValidation = (userData) => {
    const { name, email, password, password1, phone } = userData;   
    if(password !== password1){
        return { status: false, title: 'Password Mismatched!', message: 'both password must match.'};
      }
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
      //(?=.*[A-Za-z]) at least one uppercase and one lowercase
      //(?=.*\d) at least one number
      //(?=.*[@$!%*#?&]) at least one special symbols
  
      const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const phoneRegex = /^[0-9]{10,13}$/;
    //   const nameRegex = /^[a-zA-Z]+" *"{6,50}$/;
      
      if(name === '' || name.length < 6){
          return { status: false, title:'Username Invalid!', message:'username should not be empty' };
      }
      if(!password.match(passwordRegex)){
        return { status: false, title:'Password Invalid!', message:'must be 6 digit and should consist of number and symbols' };
      }
      if(!email.match(emailRegex)){
        return { status: false, title:'Email Invalid!', message:'enter valid email address' };
      }
      if(!phone.match(phoneRegex)){
          return { status: false, title:'Phone number Invalid!', message:'enter valid phone number' };
      }
      return { status: true, title:'User Created Successfully', message:'' };
}