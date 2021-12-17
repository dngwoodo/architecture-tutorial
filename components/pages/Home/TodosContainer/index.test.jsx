import { fireEvent, screen, render } from '@testing-library/react';

import TodosContainer from '.';

describe('TodoContainer', () => {
  it('renders button and input', () => {
    render(<TodosContainer />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it("adds todo when click 'Add' button", () => {
    render(<TodosContainer />);

    expect(screen.queryByText('test')).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it("deletes todo when click 'Delete' button", () => {
    render(<TodosContainer />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('test')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });

  it("completes todo when click 'Complete' button", () => {
    render(<TodosContainer />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('test')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Complete'));
    expect(screen.getByRole('heading')).toContainHTML('<s>test</s>');
  });
});
