import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
    query getMovie($movieId: String!) {
        movie(id: $movieId) {
            id
            title
            small_cover_img
        }
    }
`;

export default function Home() {
    const params = useParams();
    console.log(params);
    // const result = useQuery(GET_MOVIE, {
    const { data, loading, error } = useQuery(GET_MOVIE, {
        variables: {
            movieId: params.id,
        },
    });
    // console.log(result);
    if (loading) {
        return <h1> Fetching movie...</h1>;
    }

    if (error) {
        return <h1> Fetching error :(</h1>;
    }
    return <h1>{data.movie.title}</h1>;
}
