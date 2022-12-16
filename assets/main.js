const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCLsL15BKM8xltTCGKjMow8A&part=snippet%2Cid&order=date&maxResults=10'

const content = document.getElementById('content');         //Conexión con el elemento de id: Content de html 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '384c5ef577mshc7247df36240a8ep1e3b63jsn6ce71c9d0287',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){                       //Función asíncrona que realiza la función fetch a urlApi con las opciones específicas
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}                                                       //Estas primeras 17 lineas son constantes cuando queremos consumir una API 

(async () => {                                      //Función anónima que se llama automáticamente
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
            <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">           
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
          `
        ).slice(0,4).join('')}`;                //Con el método Slice solo devolvemos una copia del array original pero solo sus primeros 4 elementos [0,1,2,3] (4) Además el slice y join nos ayudan a organizar los videos

        content.innerHTML = view;               //Para llevar la información de la variable view a html
    } catch(error) {
        console.log(error)
    }
})();                       //Esto es similar a tener function fnName(); 


//Esta función anónima itera y muestra 4 resultados, en cada uno asigna una imagen y pone debajo de ellas el título correspondiente al video de youtube



