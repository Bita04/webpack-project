export default function request(url){

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error))
    });

}
