import { OmniTrackLandingWebPage } from './app.po';

describe('omni-track-landing-web App', () => {
  let page: OmniTrackLandingWebPage;

  beforeEach(() => {
    page = new OmniTrackLandingWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
