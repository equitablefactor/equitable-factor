import { getGlobalData } from '../utils/global-data';
import { getPageFile } from '../utils/mdx-utils';

export async function loadPage(page) {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPageFile(page);

  return { globalData, mdxSource, data };
}
