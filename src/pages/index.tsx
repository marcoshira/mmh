import { Home } from '../templates/Home';
import { GetStaticProps } from 'next';
import { StrapiData } from '../shared-types/shared-types';
import { loadPosts } from '../api/load-posts';

export default function Index({ mmh }: StrapiData) {
  return <Home {...mmh.data} />;
}

export const getStaticProps: GetStaticProps<StrapiData> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
    console.log(e);
  }

  if (!data || !data.mmh || !data.mmh.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mmh: data.mmh,
    },
    revalidate: 3600 * 24,
  };
};
