import { Alert } from 'react-bootstrap';
import s from 'components/Message/Message.module.css';

export default function Message() {
  return (
    <Alert className={s.alert} variant="primary">
      <Alert.Heading>Phone book has no contacts</Alert.Heading>
      <p>Use form to create new contact.</p>
    </Alert>
  );
}
