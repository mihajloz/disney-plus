export interface Movie {
  _id: {
    $oid: string;
  };
  Title: string;
  ShortDescription: string;
  LongDescription: string;
  Genre: string[];
  Duration: string;
  ReleaseDate: string;
  Rating: string;
  Director: string;
  Actors: string[];
  Thumbnail: string;
  LargeThumbnail: string;
  Background: string;
  Logo: string;
  Featured: boolean;
  Series: boolean;
  Movie: boolean;
  Brand: string;
}
