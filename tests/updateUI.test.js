describe('update the UI', () => {
    it('displays the input url', () => {
        document.body.innerHTML = `
        <input id="url" type="text">
        <button type="submit" id="submit">
        <h2 id="results-title></h2>`;

        require('../src/client/js/updateUi')
        require('../src/client/js/formHandler')

        const urlInput = document.getElementById('url');
        const submitBtn = document.getElementById('submit');


        urlInput.value = "https://google.com";

        submitBtn.click();
        const title = document.getElementById('results-title');


        expect(title.textContent).toBe("https://google.com")
    })
})