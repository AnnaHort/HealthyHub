import { Link } from 'react-router-dom';
import {
  UserInformationContainer,
  UserInformationDownloadLabel,
  UserInformationForm,
  UserInformationIconDirect,
  UserInformationInput,
  UserInformationLabel,
  UserInformationPhotoContainer,
  UserInformationTitle,
} from './UserInformation.styled';
import { ImgContainer } from '../../../components/UserInfoNav/UserInfoNav.styled';
import { GenderRadioBtnContainer } from '../../../components/SelectGender/SelectGender.styled';

const UserInformation = () => {
  return (
    <UserInformationForm>
      <UserInformationContainer>
        <UserInformationLabel htmlFor="name">Your name</UserInformationLabel>
        <UserInformationInput
          type="text"
          id="name"
          placeholder="тут має бути імя користувача"
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="photo">Your photo</UserInformationLabel>
        <UserInformationPhotoContainer>
          <ImgContainer
            style={{ marginRight: '12px', width: '36px', height: '36px' }}
          >
            <img
              style={{ width: '36px', height: '36px' }}
              src="/src/components/UserInfoNav/Avatar.svg"
              alt="Avatar"
            />
          </ImgContainer>
          <UserInformationIconDirect>
            <use
              href="/src/Sprites/icons/symbol-defs.svg#icon-direct-inbox"
              stroke="var(--color-primary-green-lite)"
            ></use>
          </UserInformationIconDirect>
          <input type="file" id="photo" name="fileUpload" style={{position:"absolute", opacity:"0"}}/>
          <UserInformationDownloadLabel htmlFor="photo">Download new photo</UserInformationDownloadLabel>
        </UserInformationPhotoContainer>
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="age">Your age</UserInformationLabel>
        <UserInformationInput
          type="number"
          id="age"
          name="quantity"
          min="1"
          max="100"
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationTitle>Gender</UserInformationTitle>
        <div>
          <label htmlFor="male" style={{color:"red"}}>Male</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="female" style={{color:"red"}}>Female</label>
          <input type="radio" id="female" name="gender" value="female" />
        </div>
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="height">Height</UserInformationLabel>
        <UserInformationInput
          type="number"
          id="height"
          name="quantity"
          min="1"
          max="100"
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <UserInformationLabel htmlFor="weight">Weight</UserInformationLabel>
        <UserInformationInput
          type="number"
          id="weight"
          name="quantity"
          min="1"
          max="100"
        />
      </UserInformationContainer>

      <UserInformationContainer>
        <h3>Your Activity</h3>
        <div>
          <div>
            <label htmlFor="low 1.2">
              1.2 - if you do not have physical activity and sedentary work
            </label>
            <input type="radio" id="low 1.2" value="low 1.2" name="activity" />
          </div>

          <div>
            <label htmlFor="light 1.375">
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </label>
            <input
              type="radio"
              id="light 1.375"
              value="light 1.375"
              name="activity"
            />
          </div>

          <div>
            <label htmlFor="average 1.55">
              1.55 - if you play sports with average loads 3-5 times a week
            </label>
            <input
              type="radio"
              id="average 1.55"
              value="average 1.55"
              name="activity"
            />
          </div>

          <div>
            <label htmlFor="high 1.725">
              1.725 - if you train fully 6-7 times a week
            </label>
            <input
              type="radio"
              id="high 1.725"
              value="high 1.725"
              name="activity"
            />
          </div>

          <div>
            <label htmlFor="hard 1.9">
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </label>
            <input
              type="radio"
              id="hard 1.9"
              value="hard 1.9"
              name="activity"
            />
          </div>
        </div>
      </UserInformationContainer>

      <div>
        <button type="submit">Save</button>
        <Link to={'/main'}>Cancel</Link>
      </div>
    </UserInformationForm>
  );
};
export default UserInformation;
