import { render } from '@testing-library/react';

import AccountsButton from './accounts-button';

describe('AccountsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountsButton />);
    expect(baseElement).toBeTruthy();
  });
});
