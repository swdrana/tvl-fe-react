import data from '../FakeData/Data3.json';
import "./Dropdown.css";

export default function Dropdown() {
  return (
    <div className="dropdown">
      {data.map((item) => (
        <div className="dropdown-item" key={item.name}>
          <span className="item-icon">🔹</span>
          <div>
            <div className="item-name">{item.name}</div>
            <div className="item-description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
