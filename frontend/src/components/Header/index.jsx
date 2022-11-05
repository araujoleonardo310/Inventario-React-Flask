import './index.css'

const Header = (props) => {
  return (
    <div className="header">
      <div className="text-center">
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  );
};

export default Header;
