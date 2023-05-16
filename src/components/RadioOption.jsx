export default function RadioOption({ value, text }) {
  return (
    <div className="radio-option">
      <input
        type="radio"
        name="foodAndDrink"
        value={value}
        className="radio-input"
      />
      <label htmlFor="foodAndDrink">{text}</label>
    </div>
  );
}
