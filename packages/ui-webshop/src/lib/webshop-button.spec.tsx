import { render } from '@testing-library/react';

import WebshopButton from './webshop-button';

describe('WebshopButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebshopButton />);
    expect(baseElement).toBeTruthy();
  });
});
