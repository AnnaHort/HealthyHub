// import {
//   IconButton,
//   // ImgArrowDown,
//   ImgContainer,
//   ModalContainer,
//   StyledIcon,
//   Text,
//   UserInfoContainer,
// } from './UserInfoNav.styled';
// import UserInfoModal from '../UserInfoModal/UserInfoModal';
// import { useEffect, useRef, useState } from 'react';

// const UserInfoNav = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const modalRef = useRef(null);

//   const handleIconButtonClick = () => {
//     setModalOpen(!isModalOpen);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleOutsideClick = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       handleCloseModal();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);

//     // Удаление слушателя событий при размонтировании компонента
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);
//   return (
//     <UserInfoContainer>
//       <Text>Konstantin</Text>
//       <ImgContainer>
//         <img src="/src/components/UserInfoNav/Avatar.svg" alt="Avatar" />
//       </ImgContainer>

//       <IconButton onClick={handleIconButtonClick}>
//         {/* <ImgArrowDown
//           src="/src/components/ControlPanelGoals/Img/arrow-down-min.svg"
//           alt="Arrow bown"
//         /> */}
//         <StyledIcon>
//           <use href="/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"></use>
//         </StyledIcon>
//       </IconButton>

//       {isModalOpen && (
//         <ModalContainer ref={modalRef}>
//           <UserInfoModal />
//         </ModalContainer>
//       )}
//     </UserInfoContainer>
//   );
// };

// export default UserInfoNav;

import { useState } from 'react';
import {
  IconButton,
  ImgContainer,
  ModalContainer,
  StyledIcon,
  Text,
  UserInfoContainer,
} from './UserInfoNav.styled';
import UserInfoModal from '../UserInfoModal/UserInfoModal';

const UserInfoNav = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <UserInfoContainer>
      <Text>Konstantin</Text>
      <ImgContainer>
        {/* <img src="/src/components/UserInfoNav/Avatar.svg" alt="Avatar" /> */}
        <img src="../../components/UserInfoNav/Avatar.svg" alt="Avatar" />
      </ImgContainer>

      <IconButton onClick={handleIconButtonClick}>
        <StyledIcon onClick={handleCloseButtonClick}>
          <use href="/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"></use>
        </StyledIcon>
      </IconButton>

      {isModalOpen && (
        <ModalContainer onClick={handleCloseButtonClick}>
          <UserInfoModal />
        </ModalContainer>
      )}
    </UserInfoContainer>
  );
};

export default UserInfoNav;
