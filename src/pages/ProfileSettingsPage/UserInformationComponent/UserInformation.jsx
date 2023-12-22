import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
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

import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const UserInformation = () => {
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [userActivity,setUserActivity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/user/current');
        setUserData(response.data);
        console.log(response.data);
        setGender(response.data.gender);
        setUserActivity(response.data.userActivity);
      } catch (error) {
        console.error('Data error', error.message);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      name,
      age,
      gender,
      height,
      weight,
      userActivity
    };
    try {
      const response = await axios.put('/api/user/update', newUserData);
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Data error', error.message);
      toast.error('Error updating user information');
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <UserInformationForm onSubmit={handleSubmit}>
      <UserInformationContainer>
        <UserInformationLabel htmlFor="name">Your name</UserInformationLabel>
        <UserInformationInput
          type="text"
          id="name"
          placeholder={`${userData.name}`}
          onChange={(e) => setName(e.target.value)}
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="photo">Your photo</UserInformationLabel>
        <UserInformationPhotoContainer>
          <UserInformationImgContainer>
            <UserInformationImg
              style={{ width: '36px', height: '36px', borderRadius:"50%" }}
              src={`${userData.avatarURL}`}
              alt="Avatar"
            />
          </UserInformationImgContainer>
          <UserInformationIconDirect>
            <use
              href="/src/Sprites/icons/symbol-defs.svg#icon-direct-inbox"
              stroke="var(--color-primary-green-lite)"
            ></use>
          </UserInformationIconDirect>
          <input
            type="file"
            id="photo"
            name="fileUpload"
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
          placeholder={`${userData.age}`}
          type="number"
          id="age"
          name="quantity"
          min="1"
          max="100"
          onChange={(e) => setAge(e.target.value)}
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
              checked={gender === 'Male'}
              onChange={() => setGender('Male')}
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
              checked={gender === 'Female'}
              onChange={() => setGender('Female')}
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
          placeholder={`${userData.height}`}
          type="number"
          id="height"
          name="quantity"
          min="1"
          max="300"
          onChange={(e) => setHeight(e.target.value)}
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="weight">Weight</UserInformationLabel>
        <UserInformationInput
          placeholder={`${userData.weight}`}
          type="number"
          id="weight"
          name="quantity"
          min="1"
          max="300"
          onChange={(e) => setWeight(e.target.value)}
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
              checked={userActivity === "1.25"}
              onChange={() => setUserActivity("1.25")}            
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
              checked={userActivity === "1.45"}
              onChange={() => setUserActivity("1.45")}
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
              checked={userActivity === "1.65"}
              onChange={() => setUserActivity("1.65")}
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
              checked={userActivity === "1.85"}
              onChange={() => setUserActivity("1.85")}
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
              checked={userActivity === "2"}
              onChange={() => setUserActivity("2")}
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
      {/* <Toaster  /> */}
      <ToastContainer position="top-right"/>
    </UserInformationForm>
  );
};
export default UserInformation;
