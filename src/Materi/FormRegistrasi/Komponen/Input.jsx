const Input = ({ label, type, name, onChange, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      <br />
    </div>
  );
};

export default Input;
