import { useSelector, useDispatch } from 'react-redux';
import { updateUserName, updatePickup } from '../redux/action';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log(state);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      dispatch(updateUserName(res.data.title));
      setLoading(false);
    });
  }, []);

  const googleAsync = async () => {
    const address = await axios.get('//');
  };

  return (
    <>
      {loading ? (
        <>loading form..</>
      ) : (
        <>
          <input value={state.name} placeholder='name' onChange={googleAsync} />
          <input
            value={state.pickup}
            placeholder='pickup'
            onChange={(e) => dispatch(updatePickup(e.target.value))}
          />

          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </>
  );
};

export default UserForm;
