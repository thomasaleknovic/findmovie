const API_KEY = "c3ab9cb1f7b2cb8c4daee718d88cfb97";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {

    getMovieList: async () => {

        return [
            
            {
                slug: 'netflixMovies',
                title: 'Filmes Netflix',
                items: await basicFetch (`/discover/movie?sort_by=popularity.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&api_key=${API_KEY}`)
            }

        ];
    },

}
