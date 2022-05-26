const validation = (values) => {
    
    let errors={};

    if(!values.fullname){
        errors.fullname="Name is Required."
    }
    if(!values.email){
        errors.email="Email is Required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is Invalid"
    }
    if(!values.password){
        errors.password="Password is Required."
    }else if(values.password.length < 5){
        errors.password="Password must be more than five characters"
    }
    // else if(values.password !== values.confirm_password){
    //     errors.confirm_password="Password is missmatch."
    // }
    return errors;
};

export default validation;