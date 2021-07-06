interface PrayPost extends Omit<Tanzaku, 'id'> {}

interface PrayResult {
  success: boolean;
}

export const prayToApi = async (prayData: PrayPost) => {
  const result = await fetch(`${process.env['API_BASE_URL'] ?? ''}/registerTanzaku.php`, {
    method: 'POST',
    body: JSON.stringify(prayData),
  });
  return result.json() as Promise<PrayResult>;
};

interface GetTanzakuResult extends Array<Tanzaku> {}

export const getTanzaku = async () => {
  const result = await fetch(`${process.env['API_BASE_URL'] ?? ''}/getTanzakuInfo.php`);
  return result.json() as Promise<GetTanzakuResult>;
};
