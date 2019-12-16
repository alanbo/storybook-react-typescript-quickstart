import React from 'react';
import { storiesOf } from '@storybook/react';
import Sample from '../components/sample';

storiesOf('Sample', module)
  .add('text 1', () => <Sample text="sample 1" />)
  .add('text 2', () => <Sample text="sample 2" />);