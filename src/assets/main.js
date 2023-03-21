const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCLsL15BKM8xltTCGKjMow8A&part=snippet%2Cid&order=date&maxResults=20'

const content = document.querySelector('#content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '384c5ef577mshc7247df36240a8ep1e3b63jsn6ce71c9d0287',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data
}

(async () => {
  try {
    const videos = await fetchData(API)
    let view = videos.items.map(x => `<a href = 'https://www.youtube.com/watch?v=${x.id.videoId}' target='_blank'> <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${x.snippet.thumbnails.high.url}" alt="${x.snippet.title}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${x.snippet.title}
      </h3>
    </div>
  </div> </a>`)

  content.innerHTML = view.slice(0,4).join('')
  } catch {
    console.log('Error!!')
  }
})();