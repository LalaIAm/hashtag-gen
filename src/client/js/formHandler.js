const submit = document.getElementById('submit');

const getUrl = () => {
  const url = document.getElementById('url').value
  return url
}

const handleSubmit = async (event) => {
  event.preventDefault();

  // check what text was put into the form field
  let url = getUrl();

  console.log('::: Form Submitted :::');

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const data = JSON.stringify({ url: url });

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };

  fetch('/api/analyze', options)
    .then((response) => response.json())
    .then((result) => {
      console.log('result: ', result)
      Client.processResults(result);
      Client.updateTitle(url)
    })

    .catch((error) => console.log('error: ', error));
  

};



export { handleSubmit, getUrl, submit };
