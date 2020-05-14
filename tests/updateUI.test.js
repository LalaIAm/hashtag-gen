describe('update the UI', () => {
  it('displays the hashtag  results', () => {
    document.body.innerHTML = `
        <input id="url" type="text" name="url">
        <button type="submit" id="submit">
      <ul id="hashtag-list"></ul>`;

    require('../src/client/js/formHandler');
    require('../src/client/js/updateUI');

    const urlInput = document.getElementById('url');
    const submitBtn = document.getElementById('submit');
    const hashtags = document.getElementById('hashtag-list');

    urlInput.textContent = 'https://flaviocopes.com/jest/';

    submitBtn.click();

    expect(hashtags.innerHTML).not.toBeUndefined();
  });
});
