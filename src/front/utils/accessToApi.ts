import registerTanzakuApi from '../../api/registerTanzaku.php';
import getTanzakuApi from '../../api/getTanzakuInfo.php';

interface PrayPost extends Omit<Tanzaku, 'id'> {}

interface PrayResult {
  success: boolean;
}

export const prayToApi = async (prayData: PrayPost) => {
  const result = await fetch(registerTanzakuApi, {
    method: 'POST',
    body: JSON.stringify(prayData),
  });
  return result.json() as Promise<PrayResult>;
};

interface GetTanzakuResult extends Array<Tanzaku> {}

export const getTanzaku = async () => {
  const result = await fetch(getTanzakuApi);
  return result.json() as Promise<GetTanzakuResult>;
};
