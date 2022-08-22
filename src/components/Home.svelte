<script>
  let query = "";
  let timer;

  let results = [];

  const debounce = (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      query = v;
    }, 300);
  };

  const search = async (query) => {
    if (!query) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        import.meta.env.PUBLIC_TMDB_API
      }&language=en-US&query=${query}&page=1&include_adult=true`
    );

    const data = await res.json();

    const searchResults = data.results
      .filter(
        (result) => result.media_type === "movie" || result.media_type === "tv"
      )
      .map((result) => {
        return {
          id: result.id,
          title: result.title || result.name,
          poster: result.poster_path
            ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
            : null,
          releaseDate: result.release_date,
          mediaType: result.media_type,
          rating: result.vote_average,
        };
      });

    results = searchResults;
  };

  $: query, search(query);
</script>

<div class="space-y-5 w-full sm:w-[35rem]">
  <input
    type="text"
    placeholder="Start Typing To Search..."
    class="input w-full bg-base-200"
    on:keyup={({ target: { value } }) => debounce(value)}
  />
  {#each results as result}
    <div class="card card-side card-compact bg-base-200 shadow-xl h-52">
      {#if result.poster}
        <img src={result.poster} alt={`${result.title} Poster`} />
      {/if}
      <div class="card-body">
        <h2 class="card-title">{result.title}</h2>
        <p>{result.releaseDate || ""}</p>
        {#if result.rating}
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <p class="ml-1">{result.rating}/10</p>
          </div>
        {/if}
        <div class="card-actions justify-end">
          <a href={`/${result.mediaType}/${result.id}`} class="btn btn-primary"
            >open</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>
