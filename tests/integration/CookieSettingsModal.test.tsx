import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CookieSettingsModal, { CookiePreferences } from '@/components/ui/CookieSettingsModal';

describe('CookieSettingsModal', () => {
  const basePreferences: CookiePreferences = {
    necessary: true,
    performance: false,
    functional: false,
    targeting: false,
  };

  const renderModal = (overrides?: Partial<React.ComponentProps<typeof CookieSettingsModal>>) => {
    const props = {
      isOpen: true,
      onClose: vi.fn(),
      onSave: vi.fn(),
      initialPreferences: basePreferences,
      ...overrides,
    };

    return render(<CookieSettingsModal {...props} />);
  };

  it('saves toggled preferences', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    renderModal({ onSave });

    const performanceSwitch = screen.getByRole('switch', { name: /performance cookies/i });
    await user.click(performanceSwitch);

    await user.click(screen.getByRole('button', { name: /save my preferences/i }));

    expect(onSave).toHaveBeenCalledWith({
      ...basePreferences,
      performance: true,
    });
  });

  it('accepts all categories at once', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    renderModal({ onSave });

    await user.click(screen.getByRole('button', { name: /accept all/i }));

    expect(onSave).toHaveBeenCalledWith({
      necessary: true,
      performance: true,
      functional: true,
      targeting: true,
    });
  });
});
