import React from "react";


function Verification() {
    const [authloading, setAuthLoading] = useState(false)
    if(authloading && getToken()){
        return <div className='content'>Checking Authentication....</div>
    }
    useEffect(() => {
        // Do something
      }, []);

    return(
        <div className="container">
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h2 className="title text-center">Verification Successfull</h2>
                <p className="title text-center">Now You are able to login</p>
            </div>
            <div className="col-md-3"></div>
            </div>
            
        </div>
    )
}

export default Verification;