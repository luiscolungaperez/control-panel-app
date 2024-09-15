import { Card } from '../card';

interface Props {
  email: string;
  cell: string;
}

export const UserContact: React.FC<Props> = ({ email, cell }) => {
  return (
    <Card title='Contact'>
      <span>Email: {email}</span>
      <span>Cellphone: {cell}</span>
    </Card>
  );
};
