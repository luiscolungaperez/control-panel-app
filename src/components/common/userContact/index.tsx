import { Card } from '../card';

interface Props {
  email: string;
  cell: string;
}

export const UserContact: React.FC<Props> = ({ email, cell }) => {
  return (
    <Card title='Contacto'>
      <span>Email: {email}</span>
      <span>Celular: {cell}</span>
    </Card>
  );
};
