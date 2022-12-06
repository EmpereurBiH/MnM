import { useLoadScript } from "@react-google-maps/api";
import PolylinesMap from "../../src/components/polylinesmap";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MapPolylines() {

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      libraries: ["places", "drawing"],
    });
    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('/api/staticdata', fetcher);
    console.log("data:",data)
    console.log(typeof data)
    console.log(typeof obj)
      //Handle the error state
    if (error) return <div>Failed to load</div>;
      //Handle the loading state
    if (!data) return <div>Loading...</div>;
      //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  if (!isLoaded) return <div>Loading...</div>;
  return <PolylinesMap data={data}/>;
}