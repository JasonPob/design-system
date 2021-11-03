// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  Taglines,
  ModalSizes,
  Directional,
  Headless,
  Footless,
  HiddenFooter,
  Menu
} from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Modal', () => {
  it('renders a default modal', () => matchesMarkup(<defaultComponent />));

  it('renders a modal with a tagline', () => matchesMarkup(<Taglines />));

  it('renders a modal that is small', () =>
    matchesMarkup(<ModalSizes size="small" />));

  it('renders a modal that is medium', () =>
    matchesMarkup(<ModalSizes size="medium" />));

  it('renders a modal that is large', () =>
    matchesMarkup(<ModalSizes size="large" />));

  it('renders a modal that is directional', () =>
    matchesMarkup(<Directional />));

  it('renders a modal that is headless', () => matchesMarkup(<Headless />));

  it('renders a modal that is Footless', () => matchesMarkup(<Footless />));

  it('renders a modal that is has a hidden footer', () =>
    matchesMarkup(<HiddenFooter />));

  it('renders a modal that is contains a menu', () => matchesMarkup(<Menu />));
});
