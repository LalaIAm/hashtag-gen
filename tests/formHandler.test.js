
/**
 * @jest-environment jsdom
 */



// eslint-disable-next-line no-undef
describe('URL Input Form', () => {
	it('getUrl retreives the url input from the form', () => {
		document.body.innerHTML = `
                <input id="url" type="text" name="url" placeholder="url">
                <button type='submit' id='submit'>
        `;
		require('../src/client/js/formHandler');
		const { getUrl } = require('../src/client/js/formHandler.js');

		const urlInput = document.getElementById('url');
		const submitBtn = document.getElementById('submit');
		urlInput.value = 'https://medium.com';

		const result = getUrl();
		submitBtn.click();

		expect(result).toBe('https://medium.com');
	});
});
