import axios from "axios";
import { ImagesType } from "./components/App/App.types";
const myApiKey = "82NYQkcmlPQG7v48921wcX1z9-VbnvrsVYr3GnDquSE";
axios.defaults.baseURL = "https://api.unsplash.com";

interface Response {
  results: ImagesType[];
  total_pages: number;
}
export const fetchImageWithTopic = async (
  topic: string,
  page: number
): Promise<Response> => {
  const { data } = await axios.get<Response>("/search/photos", {
    params: {
      query: topic,
      per_page: 15,
      page,
      client_id: myApiKey,
    },
  });
  return data;
};
