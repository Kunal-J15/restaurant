
import MealMiniForm from '../Meals/MealMiniForm';
import './Li.css';

const Li = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
      <MealMiniForm data={props}/>
      </div>
    </li>
  );
};

export default Li;