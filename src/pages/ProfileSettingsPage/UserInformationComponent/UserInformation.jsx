import { Link } from "react-router-dom";

const UserInformation = () => {
  return (
    <form>
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" placeholder="тут має бути імя користувача" />

      <label htmlFor="photo">Your photo</label>
      <input type="file" id="photo" name="fileUpload" />

      <label htmlFor="age">Your age</label>
      <input type="number" id="age" name="quantity" min="1" max="100" />

      <h3>Gender</h3>
      <label htmlFor="">Male</label>
      <input type="radio" id="male" name="gender" value="male" />

      <label htmlFor="">Female</label>
      <input type="radio" id="female" name="gender" value="female" />

      <label htmlFor="height">Height</label>
      <input type="number" id="height" name="quantity" min="1" max="100" />

      <label htmlFor="weight">Weight</label>
      <input type="number" id="weight" name="quantity" min="1" max="100" />

      <h3>Your Activity</h3>

      <label htmlFor="low 1.2">

        1.2 - if you do not have physical activity and sedentary work
      </label>
      <input type="radio" id="low 1.2" value="low 1.2" name="activity" />

      <label htmlFor="light 1.375">

        1.375 - if you do short runs or light gymnastics 1-3 times a week
      </label>
      <input
        type="radio"
        id="light 1.375"
        value="light 1.375"
        name="activity"
      />

      <label htmlFor="average 1.55">
     
        1.55 - if you play sports with average loads 3-5 times a week
      </label>
      <input
        type="radio"
        id="average 1.55"
        value="average 1.55"
        name="activity"
      />

      <label htmlFor="high 1.725">
        1.725 - if you train fully 6-7 times a week
      </label>
      <input type="radio" id="high 1.725" value="high 1.725" name="activity" />

      <label htmlFor="hard 1.9">

        1.9 - if your work is related to physical labor, you train 2 times a day
        and include strength exercises in your training program
      </label>
      <input type="radio" id="hard 1.9" value="hard 1.9" name="activity" />

      <button type="submit">Save</button>
      <Link to={"/main"}>Cancel</Link>

    </form>
  );
};
export default UserInformation;
