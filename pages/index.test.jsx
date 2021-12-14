import { render } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  it('renders title', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent('Home');
  });
});
