export const Dropdown: React.FC = () => {
  return (
    <div className='dropdown'>
      <button className='dropdown-btn'>Selecciona una opción</button>
      <div className='dropdown-content'>
        <a href='#'>Opción 1</a>
        <a href='#'>Opción 2</a>
        <a href='#'>Opción 3</a>
      </div>
    </div>
  );
};
