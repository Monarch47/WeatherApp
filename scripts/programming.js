let APIkey = "f1E2C55vm7Fyh7wK8i7ipp5JIkUNV0LM";

let getCity = async (city)=>{

    let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${APIkey}&q=${city}`;

    let response = await fetch(base + query);
    let data = await response.json();
    console.log(data);
    return data[0];
}

getWeather = async (returnedID)=>{

    let base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    let query1 = `${returnedID}`;
    let query2 = `?apikey=${APIkey}`;

    let response = await fetch(base + query1 + query2);
    let data = await response.json();

    return data[0];
}

// getCity("new delhi")
// .then((data)=>{
//    return getWeather(data.Key)
// .then((data)=>{
//     console.log(data);
// })   
// }).catch((error)=>{
//     console.log(error);
// })

