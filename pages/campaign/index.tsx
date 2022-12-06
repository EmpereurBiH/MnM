import { useLoadScript } from "@react-google-maps/api";
import CampaignMap from "../../src/components/campaignmap";

export default function Campaign() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "drawing"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <CampaignMap />;
}