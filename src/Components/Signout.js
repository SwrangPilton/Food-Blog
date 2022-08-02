import { auth } from '../Firebase/config'

export default function Signout() {
    return (
        <div className="flex flex-col pt-20 justify-center items-center">
            <button className="py-4 px-6 bg-blue-500 text-white text-semibold"
                onClick={() => {
                    console.log('Signed Out');
                    auth().signOut().then(function () {
                        console.log('Signed Out');
                    }, function (error) {
                        console.error('Sign Out Error', error);
                    });
                }}
            >Sign out</button>
        </div>
    )
}
