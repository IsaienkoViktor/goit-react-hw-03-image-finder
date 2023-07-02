import { Dna } from 'react-loader-spinner';
import './loader.css';

export const Loader = () => {
  return (
    <div className="Dna">
      <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" />
    </div>
  );
};
