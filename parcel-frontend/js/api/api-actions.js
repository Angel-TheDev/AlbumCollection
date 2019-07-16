function getRequest(location, callback){
    fetch(location)
    .then(response => response.json())
    .then(jsonData => callback(jsonData))
    .catch(err => console.log(err))
}


function postRequest(location, requestBody, callback) {
fetch(location, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(jsonData => callback(jsonData))
.catch(err => console.log(err))
}

function deleteRequest(location, id, callback){
    fetch(location + "/" + id, {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(jsonData => callback(jsonData))
    .catch(err => {
        console.error(err)
    });
}

export default {
    getRequest, postRequest, deleteRequest
};