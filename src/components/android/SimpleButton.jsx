/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-native';

function SimpleButton({ onPress, title }) {
  return <Button title={title} onPress={onPress} />;
}

export default SimpleButton;
