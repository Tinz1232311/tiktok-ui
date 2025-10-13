import { useParams } from 'react-router-dom';

function ProfilePage() {
    const { nickname } = useParams();

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Nickname: {nickname}</p>
        </div>
    );
}

export default ProfilePage;
