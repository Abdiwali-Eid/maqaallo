import React, { useMemo } from 'react';
import BlogGrid from './BlogGrid';

function RelatedArticles({ currentSlug, currentCategoryIds, candidates }) {
  const blogs = useMemo(() => {
    if (!candidates?.length) return [];
    const catSet = new Set(currentCategoryIds || []);
    const others = candidates.filter((n) => n.slug?.current !== currentSlug);
    const sameCategory = others.filter((n) =>
      n.categories?.some((c) => catSet.has(c.id))
    );
    const sameIds = new Set(sameCategory.map((b) => b.id));
    const rest = others.filter((n) => !sameIds.has(n.id));
    return [...sameCategory, ...rest].slice(0, 3);
  }, [candidates, currentSlug, currentCategoryIds]);

  if (!blogs.length) return null;

  return (
    <section className="related-articles" aria-labelledby="related-heading">
      <h2 id="related-heading" className="related-articles__title">
        Qoraallo la xiriira
      </h2>
      <BlogGrid blogs={blogs} />
    </section>
  );
}

export default RelatedArticles;
