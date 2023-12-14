import { UserSvgStyled } from "./User-icon-svg.styled";

const UserIcon = () => {
    return (
      <UserSvgStyled id="icon-profile-circle" viewBox="0 0 32 32" >
        <path
          fill="none"
          stroke="#fff"
          style={{ stroke: "var(--color1, #fff)" }}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="1.8462"
          d="M16.16 17.040c-0.093-0.013-0.213-0.013-0.32 0-2.347-0.080-4.213-2-4.213-4.36 0-2.413 1.947-4.373 4.373-4.373 2.413 0 4.373 1.96 4.373 4.373-0.013 2.36-1.867 4.28-4.213 4.36z"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          style={{ stroke: "var(--color1, #fff)" }}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="1.8462"
          d="M24.987 25.84c-2.373 2.173-5.52 3.493-8.987 3.493s-6.613-1.32-8.987-3.493c0.133-1.253 0.933-2.48 2.36-3.44 3.653-2.427 9.627-2.427 13.253 0 1.427 0.96 2.227 2.187 2.36 3.44z"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          style={{ stroke: "var(--color1, #fff)" }}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeWidth="1.8462"
          d="M16 29.333c7.364 0 13.333-5.969 13.333-13.333s-5.97-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"
        ></path>
      </UserSvgStyled>
    );
  };
  
  export default UserIcon;
  
