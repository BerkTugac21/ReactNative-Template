import { render } from '@testing-library/react-native';

import SimpleButton from './SimpleButton';

describe('<SimpleButton/>', () => {
  test('it renders correctly', () => {
    const { getByText } = render(
      <SimpleButton title='Click me' onPress={() => console.log('Pressed')} />,
    );
    expect(getByText('Click me')).toBeDefined();
  });
});
