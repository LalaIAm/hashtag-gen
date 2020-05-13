const submit = document.getElementById('submit');

const handleSubmit = async (event) => {
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById('url').value;

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
      Client.processResults(result)
    })

    .catch((error) => console.log('error: ', error));
  

};

submit.addEventListener('click', handleSubmit);

export { handleSubmit };
