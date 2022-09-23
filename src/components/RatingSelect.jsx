import { useState, useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  const check = function (x) {
    return selected === x + 1;
  };
  const changeColor = (num) => {
    const icon = document.querySelector("FaStar");
    console.log(icon);
  };

  return (
    <div className="rating-check">
      <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default RatingSelect;
