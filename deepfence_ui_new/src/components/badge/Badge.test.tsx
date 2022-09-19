import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/react';
import { FaPlus } from 'react-icons/fa';
import { describe, expect, it, vi } from 'vitest';

import { renderWithClient } from '../../tests/utils';
import Badge from './Badge';

describe(`Component Badge`, () => {
  it(`render with label, color, icon, onRemove`, () => {
    const onRemove = vi.fn();
    const { getByTestId, getByRole, getByText } = renderWithClient(
      <Badge
        label="Test badge"
        id="test-label-id"
        color="primary"
        icon={<FaPlus data-testid={`badge-icon`} />}
        isRemove
        onRemove={onRemove}
      />,
    );
    const badgeId = getByTestId('badge-test-label-id');
    const badgeIconId = getByTestId('badge-icon');
    expect(getByText('Test badge')).toBeInTheDocument();
    expect(badgeId).toHaveClass('text-blue-900');
    expect(badgeIconId).toBeDefined();

    // action
    const removeBtn = getByRole('button', {
      name: 'Test badge',
    });
    expect(removeBtn).toBeDefined();

    fireEvent.click(removeBtn);
    expect(onRemove).toHaveBeenCalledOnce();
  });
});
