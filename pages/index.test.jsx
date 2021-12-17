import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';

describe('Home', () => {
  it('renders button with /', async () => {
    const { render: renderPage } = await getPage({ route: '/' });
    renderPage();

    expect(screen.getByText('Add')).toBeInTheDocument();
  });
});
