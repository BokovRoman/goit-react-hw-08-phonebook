import './Loader.scss';
import Loader from 'react-loader-spinner';

const reactLoader = () => (
  <div className="backdrop">
    <div className="Loader">
      <Loader
        type="MutatingDots"
        color="#44bec7"
        secondaryColor="#4e777a"
        height={100}
        width={100}
      />
    </div>
  </div>
);

export default reactLoader;