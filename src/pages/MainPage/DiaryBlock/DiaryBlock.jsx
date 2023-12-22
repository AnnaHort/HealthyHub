import {
    DiaryBlockContainer,
    DiaryBlockTitle,
    SeeMoreButton,
} from './DiaryBlock.styled'


const DiaryBlock = () => {
  return (
    <DiaryBlockContainer>
      <DiaryBlockTitle>Diary</DiaryBlockTitle>
      <SeeMoreButton to="/main/diary">See more</SeeMoreButton>
    </DiaryBlockContainer>
  );
};

export default DiaryBlock;
