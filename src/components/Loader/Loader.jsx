import { Rings } from 'react-loader-spinner';
import { Block } from './Loader.styled';

const Loader = () => {
  return (
    <Block>
      <Rings
        visible={true}
        height="160"
        width="160"
        color="#edae01"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Block>
  );
};

export default Loader;
