/*
  eslint-disable import/no-extraneous-dependencies
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import DumbComponent from '../src/dumb-component/DumbComponent';

storiesOf('Dumb component', module)
  .add('Demo', () => (
    <DumbComponent />
  ));
