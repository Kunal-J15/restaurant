import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Input from '../UI/Input';
import './MealMiniForm.css';

 
const MealMiniForm = (props) => {
    const ctx = useContext(CartContext)
    const handleAdd = e=>{
        e.preventDefault();
        console.log({...props.data,amount:parseInt(e.target.amount.value)});
        ctx.addItem({...props.data,amount:parseInt(e.target.amount.value)});
        console.log(ctx);
    }
  return (
    <form className="form" onSubmit={handleAdd}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          name:"amount"
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealMiniForm;