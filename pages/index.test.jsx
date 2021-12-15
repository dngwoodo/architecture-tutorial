import { getPage } from 'next-page-tester';
import { fireEvent, screen, render } from '@testing-library/react';

import Home from '.';

describe('Home', () => {
  it('renders button with /', async () => {
    const { render: renderPage } = await getPage({ route: '/' });
    renderPage();

    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('renders button and input', () => {
    render(<Home />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it("adds todo when click 'Add' button", () => {
    render(<Home />);

    expect(screen.queryByText('test')).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it("deletes todo when click 'Delete' button", () => {
    render(<Home />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('test')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });

  it("completes todo when click 'Complete' button", () => {
    render(<Home />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('test')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Complete'));
    expect(screen.getByRole('heading')).toContainHTML('<s>test</s>');
  });
});
