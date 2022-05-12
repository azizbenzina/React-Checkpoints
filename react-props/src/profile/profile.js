import { Button } from 'react-bootstrap';

const Profile = (props) => {
    return (  

<div className="Profile">
    
<div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7">
            <div class="card p-3 py-4">
                <div class="text-center"> {props.children}  </div>
                <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">{props.profession}</span>
                    <h5 class="mt-2 mb-0">{props.fullName}</h5><br />
                    <div class="px-4 mt-1">
                        <p class="fonts">{props.bio}</p>
                    </div>
                    <br />
                    <div class="buttons"> 
                    <Button className="but" onClick={() => props.handleName(props.fullName)}>ClickMe</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
     
    );
}
Profile.defaultProps = {
    fullName: "Benzinacloud@gmail.com"
   };
 
export default Profile ;