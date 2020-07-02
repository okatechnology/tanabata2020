import axios from 'axios';
import registerTanzakuApi from '../../api/registerTanzaku.php';
import getTanzakuApi from '../../api/getTanzakuInfo.php';

interface PrayPost extends Omit<Tanzaku, 'id'> {}

interface PrayResult {
  success: boolean;
}

export const prayToApi = async (prayData: PrayPost) => {
  return await axios.post<PrayResult>(`${registerTanzakuApi}`, prayData);
};

interface GetTanzakuResult extends Tanzaku {}

export const getTanzaku = async () => {
  return await axios.get<GetTanzakuResult[]>(`${getTanzakuApi}`);
};
