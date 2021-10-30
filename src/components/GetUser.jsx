import React from "react";
import { Link } from "react-router-dom";
const GetUser = ()=>{
    return(<>
        <center className="btndiv"><Link className="gt-users" to="/getuser">Get Users</Link></center>
       <center> <p class="p">click on<i> Get User </i> for users</p></center>
    </>
    );
}
export default GetUser;