/* eslint-disable */
const searching = (liste, search) => {
  const result = [];
  liste.forEach(function(elem) {
    const { name, subtitle, submenu, slug, children } = elem;
    if (
      name &&
      name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    ) {
      result.push(elem);
    }
    if (
      subtitle &&
      subtitle
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    ) {
      result.push(elem);
    }
    if (
      slug &&
      slug
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    ) {
      result.push(elem);
    }
    if (submenu) result.push(...searching(children, search));
  });
  return [...new Set(result)];
};

export default searching;
