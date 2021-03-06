import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

describe('simple ui test', () => {
  let document = {};

  beforeEach(() => {
    const dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
  });

  it("message doesn't show at the initial", () => {
    const message = document.querySelector('#message > p');
    expect(message).toBe(null);
  });

  it('show message after clicking the button', () => {
    const button = document.querySelector('#showMessage');
    const click = document.createEvent('Event');
    click.initEvent('click');
    button.dispatchEvent(click);
    const message = document.querySelector('#message > p');
    expect(message.textContent).toBe('You Passed!!!');
  });

  it('show only one message after clicking the button twice', () => {
    const button = document.querySelector('#showMessage');
    const click = document.createEvent('Event');
    click.initEvent('click');
    button.dispatchEvent(click);
    button.dispatchEvent(click);

    const messages = document.querySelectorAll('#message > p');
    expect(messages.length).toBe(1);
    expect(messages[0].textContent).toBe('You Passed!!!');
  });
});
