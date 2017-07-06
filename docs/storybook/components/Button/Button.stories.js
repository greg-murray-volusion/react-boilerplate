import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../../../app/components/Button';

storiesOf('Button', module)
  .add('handleRoute', () => <Button handleRoute={action('clicked')}>React Router Button</Button>)
  .add('link button', () => <Button onClick={action('clicked')} href="https://www.reactboilerplate.com/">Link</Button>);
