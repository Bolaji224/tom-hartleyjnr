import './DiamondPattern.css';

const DiamondPattern = ({ variant = 'light', className = '', style = {} }) => {
  return (
    <div
      className={`diamond-pattern diamond-pattern--${variant} ${className}`}
      style={style}
    />
  );
};

export default DiamondPattern;
