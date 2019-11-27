import { newE2EPage } from '@stencil/core/testing';

describe('youtube-list-embed-stencil', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<youtube-list-embed-stencil></youtube-list-embed-stencil>');

    const element = await page.find('youtube-list-embed-stencil');
    expect(element).toHaveClass('hydrated');
  });
});
