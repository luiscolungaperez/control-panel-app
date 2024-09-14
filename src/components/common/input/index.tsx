interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export const Input: React.FC<Props> = ({ type, label, id, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} id={id} type={type} />
    </div>
  );
};
