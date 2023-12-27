import axios from 'axios';
import {
  UserInformationActivityContainer,
  UserInformationBtnContainer,
  UserInformationContainer,
  UserInformationDownloadLabel,
  UserInformationForm,
  UserInformationIconDirect,
  UserInformationImg,
  UserInformationImgContainer,
  UserInformationInput,
  UserInformationLabel,
  UserInformationLabelRadio,
  UserInformationLinkCancel,
  UserInformationPhotoContainer,
  UserInformationRadioBtnContainer,
  UserInformationRadioContainer,
  UserInformationRadioInput,
  UserInformationSaveBtn,
  UserInformationTitle,
} from './UserInformation.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUpdateUserFalse,
  updateUser,
} from '../../../redux/updateUser/updateOperations';
import DownloadSvg from './DownloadSvg/DownloadSvg';
import { selectUser } from '../../../redux/auth/authSelectors';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const UserInformation = () => {
  const dispatch = useDispatch();

  const currentUserData = useSelector(selectUser);

  let { age, avatarURL, gender, height, name, userActivity, weight } =
    currentUserData;

  const [fileAvatar, setFileAvatar] = useState();
  const [newUserName, setNewUserName] = useState(name);
  const [newUserAge, setNewUserAge] = useState(age);
  const [newUserGender, setNewUserGender] = useState(gender);
  const [newUserHeight, setNewUserHeight] = useState(height);
  const [newUserWeight, setNewUserWeight] = useState(weight);
  const [newUserActivity, setNewUserActivity] = useState(userActivity);
  const [newUserAvatar, setNewUserAvatar] = useState(avatarURL);

  // аватар
  const uploadAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', fileAvatar);
      const response = await axios.post('api/user/avatars', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading avatar', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fileAvatar) {
      try {
        const response = await uploadAvatar();
        const newAvatarURL = response.avatarURL;
        setNewUserAvatar(newAvatarURL);
      } catch (error) {
        console.error('Error uploading avatar', error.message);
        toast.error('Error uploading avatar');
        return;
      }
    }

    const newUserData = {
      name: newUserName,
      age: newUserAge,
      gender: newUserGender,
      height: newUserHeight,
      weight: newUserWeight,
      userActivity: newUserActivity,
    };

    try {
      const response = await axios.put('/api/user/update', newUserData);

      dispatch(updateUser(newUserData));
      dispatch(setUpdateUserFalse());
      toast.success(response.data.message, { autoClose: 2000 });
    } catch (error) {
      console.error('Data error', error.message);
      toast.error('Error updating user information');
    }
  };

  return (
    <UserInformationForm onSubmit={handleSubmit}>
      <UserInformationContainer>
        <UserInformationLabel htmlFor="name">Your name</UserInformationLabel>
        <UserInformationInput
          type="text"
          id="name"
          placeholder={`${name}`}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="photo">Your photo</UserInformationLabel>
        <UserInformationPhotoContainer>
          <UserInformationImgContainer>
            <UserInformationImg
              style={{ width: '36px', height: '36px', borderRadius: '50%' }}
              src={newUserAvatar}
              alt="Avatar"
            />
          </UserInformationImgContainer>
          <UserInformationIconDirect>
            <DownloadSvg />
          </UserInformationIconDirect>
          <input
            type="file"
            id="photo"
            name="fileUpload"
            onChange={(e) => setFileAvatar(e.target.files[0])}
            style={{ position: 'absolute', opacity: '0' }}
          />
          <UserInformationDownloadLabel htmlFor="photo">
            Download new photo
          </UserInformationDownloadLabel>
        </UserInformationPhotoContainer>
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="age">Your age</UserInformationLabel>
        <UserInformationInput
          placeholder={`${age}`}
          type="number"
          id="age"
          name="quantity"
          min="1"
          max="100"
          onChange={(e) => setNewUserAge(e.target.value)}
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationTitle>Gender</UserInformationTitle>
        <UserInformationRadioBtnContainer>
          <UserInformationRadioContainer>
            <UserInformationRadioInput
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={newUserGender === 'Male'}
              onChange={() => setNewUserGender('Male')}
            />
            <UserInformationLabelRadio htmlFor="male">
              Male
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>

          <UserInformationRadioContainer>
            <UserInformationRadioInput
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={newUserGender === 'Female'}
              onChange={() => setNewUserGender('Female')}
            />
            <UserInformationLabelRadio htmlFor="female">
              Female
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>
        </UserInformationRadioBtnContainer>
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="height">Height</UserInformationLabel>
        <UserInformationInput
          placeholder={`${height}`}
          type="number"
          id="height"
          name="quantity"
          min="1"
          max="300"
          onChange={(e) => setNewUserHeight(e.target.value)}
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="weight">Weight</UserInformationLabel>
        <UserInformationInput
          placeholder={`${weight}`}
          type="number"
          id="weight"
          name="quantity"
          min="1"
          max="300"
          onChange={(e) => setNewUserWeight(e.target.value)}
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationTitle>Your Activity</UserInformationTitle>
        <UserInformationActivityContainer>
          <UserInformationRadioContainer style={{ position: 'relative' }}>
            <UserInformationRadioInput
              type="radio"
              id="low 1.2-1.3"
              value="low 1.2-1.3"
              name="activity"
              checked={newUserActivity === '1.25'}
              onChange={() => setNewUserActivity('1.25')}
            />
            <UserInformationLabelRadio htmlFor="low 1.2-1.3">
              1.2-1.3 - if you do not have physical activity and sedentary work
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>

          <UserInformationRadioContainer style={{ position: 'relative' }}>
            <UserInformationRadioInput
              type="radio"
              id="light 1.4-1.5"
              value="light 1.4-1.5"
              name="activity"
              checked={newUserActivity === '1.45'}
              onChange={() => setNewUserActivity('1.45')}
            />
            <UserInformationLabelRadio htmlFor="light 1.4-1.5">
              1.4-1.5 - if you do short runs or light gymnastics 1-3 times a
              week
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>

          <UserInformationRadioContainer style={{ position: 'relative' }}>
            <UserInformationRadioInput
              type="radio"
              id="average 1.6-1.7"
              value="average 1.6-1.7"
              name="activity"
              checked={newUserActivity === '1.65'}
              onChange={() => setNewUserActivity('1.65')}
            />
            <UserInformationLabelRadio htmlFor="average 1.6-1.7">
              1.6-1.7 - if you play sports with average loads 3-5 times a week
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>

          <UserInformationRadioContainer style={{ position: 'relative' }}>
            <UserInformationRadioInput
              type="radio"
              id="high 1.8-1.9"
              value="high 1.8-1.9"
              name="activity"
              checked={newUserActivity === '1.85'}
              onChange={() => setNewUserActivity('1.85')}
            />
            <UserInformationLabelRadio htmlFor="high 1.8-1.9">
              1.8-1.9 - if you train fully 6-7 times a week
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>

          <UserInformationRadioContainer style={{ position: 'relative' }}>
            <UserInformationRadioInput
              type="radio"
              id="hard 2.0"
              value="hard 2.0"
              name="activity"
              checked={newUserActivity === '2'}
              onChange={() => setNewUserActivity('2')}
            />
            <UserInformationLabelRadio htmlFor="hard 2.0">
              2.0 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </UserInformationLabelRadio>
          </UserInformationRadioContainer>
        </UserInformationActivityContainer>
      </UserInformationContainer>

      <UserInformationBtnContainer>
        <UserInformationSaveBtn type="submit" onSubmit={handleSubmit}>
          Save
        </UserInformationSaveBtn>
        <UserInformationLinkCancel to={'/main'}>
          Cancel
        </UserInformationLinkCancel>
      </UserInformationBtnContainer>
    </UserInformationForm>
  );
};
export default UserInformation;
