import { Button } from 'react-native';

const SimpleButton = ({ onPress, title }) => (
    <Button title={title} onPress={onPress} />
);

export default SimpleButton;