const glob = require('fast-glob');
const { capitalizeFirstLetter } = require('./string');

export async function getRootPagesWithRoutes() {
  const pagePaths = await glob('pages/*.js');
  const pages = getPageNames(pagePaths).reverse();
  const pagesWithRoutes = pages.map((page) => {
    const pageName = capitalizeFirstLetter(page);
    const route = page === 'index' ? '/' : `/${page}`;

    return {
      pageName,
      route,
    };
  });

  return pagesWithRoutes;
}

function getPageNames(pagePaths) {
  const pageNames = pagePaths.map((pagePath) =>
    stripDirFromPath(stripExtensionFromFilename(pagePath))
  );

  return cleanPageNameArray(pageNames);
}

function stripDirFromPath(path) {
  const pathArray = path.split('/');
  return pathArray[pathArray.length - 1];
}

function stripExtensionFromFilename(fileName) {
  return fileName.split('.')[0];
}

function cleanPageNameArray(pageNames) {
  return pageNames.filter((pageName) => !pageName.startsWith('_'));
}
