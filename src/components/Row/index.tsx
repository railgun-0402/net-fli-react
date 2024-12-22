import { useProps } from "./useProps";
import { Layout } from "./Layout";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //   }

  //   fetchData();

  return (
    <Layout title={title} isLargeRow={isLargeRow} {...useProps(fetchUrl)} />
  );
};
