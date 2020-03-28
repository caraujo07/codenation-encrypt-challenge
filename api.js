const axios = require('axios');

async function getData() {
  return await axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=f38035f22c53b30e02b2a04c2554c50eae014f98');
}

async function saveData(form) {
  return await axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=f38035f22c53b30e02b2a04c2554c50eae014f98', form, {
    headers: form.getHeaders()
  }).then(r => {
    console.log(r.data);
  })
}

module.exports = { getData, saveData };