export type Movie = {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path?: string;
    backdrop_path?: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: {
    id: number;
    name: string;
    logo_path?: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  "watch/providers": {
    results: {
      [countryCode: string]: {
        link: string;
        flatrate?: {
          logo_path: string;
          provider_id: number;
          provider_name: string;
          display_priority: number;
        }[];
        rent?: {
          logo_path: string;
          provider_id: number;
          provider_name: string;
          display_priority: number;
        }[];
        buy?: {
          logo_path: string;
          provider_id: number;
          provider_name: string;
          display_priority: number;
        }[];
      };
    };
  };
  videos: {
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }[];
  };
};

export type MovieResult = {
  aduld: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  media_type: "movie" | "tv" | "person";
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieResults = {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
};
