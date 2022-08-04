import { fetcher } from './config';
import { DataResponseType } from 'typings/types';

export const getAudio = async () => {
  const { data } = await fetcher.get<DataResponseType>(
    `/Learnfield-GmbH/CodingChallenge/master/react%20native/simple%20audio%20player/data/manifest.json`
  );
  return data;
};
