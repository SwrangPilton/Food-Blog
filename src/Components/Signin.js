import { auth } from '../Firebase/config'
import { uiConfig } from '../Firebase/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function SignIn() {
    return (
        <div className="signin my-6">
            <h1 className="text-2xl text-center">Sign In</h1>
            <StyledFirebaseAuth uiConfig={uiConfig}
                firebaseAuth={auth} />
        </div>
    );
}

export default SignIn;