import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { StrapiData } from '../shared-types/shared-types';

export const loadPosts = async (): Promise<StrapiData> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY);

  return data;
};
