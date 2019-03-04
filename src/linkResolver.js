module.exports = function linkResolver(doc) {
  if (doc) {
    switch (doc.type) {
      default:
        if (doc.uid) {
          return `/${doc.uid}`;
        }

        return `/${doc.type}`;
    }
  }

  return "/";
};
