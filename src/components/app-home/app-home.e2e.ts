import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { Person } from './person';
describe('app-home', () => {

  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({ html: `
      <app-home></app-home>
    `});
    element = await page.find('app-home');
  });
  it.skip('pass string', async () => {
    
    element.setProperty('name', 'Alan');
    await page.waitForChanges();

    const elm = await page.find('app-home >>> span');
    expect(elm.textContent).toEqual('Alan');
    expect(elm.outerHTML).toMatchSnapshot();
  });

  it('pass person object', async () => {
    element.setProperty('name', 'Alan');
    element.setProperty('name', test);
    await page.waitForChanges();

    const elm = await page.find('app-home >>> b');
    expect(elm.textContent).toEqual('George');
    expect(elm.outerHTML).toMatchSnapshot();
  });
});

const test:Person={name:'George', age:25};
