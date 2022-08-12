import { gql, useQuery } from "@apollo/client";

// palyground에서 사용한 것과 같은 방식
const ALL_MOVIES = gql`
    query allMovies {
        allMovies {
            title
            id
        }
    }
`;

export default function Movies() {
    const result = useQuery(ALL_MOVIES);
    console.log(result);
    const { data, loading, error } = useQuery(ALL_MOVIES);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>fetching miss :(</h1>;
    }
    return (
        <div>
            {data.allMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </div>
    );
}
