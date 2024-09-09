export async function generateSignature(callback, paramsToSign) {
  fetch(`/api/sign-cloudinary`, {
    method: "POST",
    body: JSON.stringify({
      paramsToSign,
    }),
  })
    .then((res) => {
      // console.log(res);
      res.json();
    })
    .then((signature) => {
      console.log("is here");
      callback(signature);
    });
}
