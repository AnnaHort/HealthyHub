import SelectGenderChoose from './SelectGenderChoose';

const SelectGender = ({ onNext, onBack, onSubmit }) => {
  return (
    <div>
      <SelectGenderChoose onBack={onBack} onNext={onNext} onSubmit={onSubmit} />
    </div>
  );
};

export default SelectGender;
