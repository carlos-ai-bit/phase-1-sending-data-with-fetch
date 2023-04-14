const formData = {
    Name: "Abdallah",
    Email: "Abdallahsafari731@gmail.com",
};

function submitData() {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),

    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.body.innerHTML += `<p> ${data.id}</p>`;
        })
        .catch((error) => {
            alert("Bad Things!");
            document.body.innerHTML += `<p> ${error.message}</p>`;
        });
}
