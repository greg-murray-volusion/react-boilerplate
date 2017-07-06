import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressBar from '../../../../app/components/ProgressBar/ProgressBar';

storiesOf('ProgressBar', module)
  .add('Start at 1%', () => <ProgressBar percent="1">Progress Bar</ProgressBar>);
