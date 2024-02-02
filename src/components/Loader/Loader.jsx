// import { TailSpin } from 'react-loader-spinner';
// import { StyledLoaderWrapper } from './Loader.styled';

// const Loader = () => {
//   return (
//     <StyledLoaderWrapper>
//       <TailSpin color="var(--accent-color)" />
//     </StyledLoaderWrapper>
//   );
// };

// export default Loader;

import { ColorRing } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderWrap>
  );
};
export default Loader;
