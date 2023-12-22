import styled from 'styled-components';

export const DiaryContainer = styled.div`
  border: 2px solid red;
 
width: 100%;
	height: 100vh;
	max-height: 232px;
	margin-top: 12px;
	padding: 16px 12px;
	border-radius: 12px;
	background: var(--color-primary-black-2);
	overflow-y: auto;


@media screen and (min-width: 834px)  {
		margin-top: 10px;
	}
`;

export const DiaryHeader = styled.div`
display: flex;
  
`;



export const DiaryTitle = styled.h1`
  color: var(--color-primary-white);
  font-size: 30px;
  line-height: 1.2;
  font-weight: 500;
`;

export const ArrowBack = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
