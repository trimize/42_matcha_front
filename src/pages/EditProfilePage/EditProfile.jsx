import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditProfile.css';
import EditProfilePicture from '../../components/EditProfile/EditProfilePicture/EditProfilePicture';
import EditProfileInfo from '../../components/EditProfile/EditProfileInfo/EditProfileInfo';
        
const EditProfile = () => {
  const { userId } = useParams();
  const [shadowUser, setShadowUser] = useState(null);

	return (
		<div className='edit-profile-container'>
            <EditProfileInfo userId={userId} shadowUser={shadowUser} setShadowUser={setShadowUser} />
			<EditProfilePicture userId={userId} shadowUser={shadowUser} setShadowUser={setShadowUser} />
		</div>
	);
}

export default EditProfile;