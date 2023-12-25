import { useState } from 'react';

const RecordDiaryModal = ({ closeModal, recordMeal, meal }) => {
  const [nutrients, setNutrients] = useState({
    carbohydrates: 0,
    protein: 0,
    fat: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNutrients({ ...nutrients, [name]: value });
  };

  const handleSubmit = () => {
    recordMeal(nutrients);
  };

  return (
    <div>
      <h2>Record {meal} Meal</h2>
      <label>
        Carbohydrates:{' '}
        <input
          type="number"
          name="carbohydrates"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Protein:{' '}
        <input type="number" name="protein" onChange={handleInputChange} />
      </label>
      <label>
        Fat: <input type="number" name="fat" onChange={handleInputChange} />
      </label>
      <button onClick={handleSubmit}>Record Meal</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default RecordDiaryModal;
