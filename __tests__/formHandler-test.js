import { handleSubmit, getUrl } from '../src/client/js/formHandler';

jest.mock('../src/client/js/formHandler');

test('gets user input', () => {
  document.body.innerHTML =
    '<div>' +
    '<form>' +
    '<input type="text" id="url">' +
    '<input type="submit" id="submit">' +
    '</form>' +
    '</div>';

  getUrl.mockImplementation((cb) => {
    cb({
      url: 'https://google.com',
    });
  });

    const submit = document.getElementById('submit');
    submit.click()

  expect(handleSubmit).toBeCalled();
  expect(url.text().toEqual('https://google.com'));
});
