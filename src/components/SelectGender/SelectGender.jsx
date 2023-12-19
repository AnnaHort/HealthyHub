import SelectGenderChoose from './SelectGenderChoose';

const SelectGender = ({ onNext, onBack }) => {
  return (
    <div>
      <SelectGenderChoose onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default SelectGender;
