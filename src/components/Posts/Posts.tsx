import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from '../Base/Container/Container';
import TitleSection from '../Base/TitleSection/TitleSection';

import styles from './Posts.module.css';
import { useBlogPageQuery } from '../../graphql/blog-page';

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useBlogPageQuery();

  const sectionTitle = markdownRemark?.frontmatter;
  const posts = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div className={styles.posts}>
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags },
          } = item.node;

          return (
            <div className={styles.post} key={id}>
              <Link to={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <div className={styles.card}>
                    <figure className={styles.image}>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </figure>
                    <div className={styles.content}>
                      <h3 className={styles.date}>{date}</h3>
                      <h3 className={styles.title}>{title}</h3>
                      <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.tags}>
                      {tags.map((item) => (
                        <span className={styles.tag} key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Posts;
