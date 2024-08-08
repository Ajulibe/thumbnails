import { GetStaticProps } from "next";
import fetchProjects from "../lib/fetch-projects";
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Home = ({ projects }) => {
  const router = useRouter();

  const handleRowClick = (project) => {

    router.push({
      pathname: `/thumbnails/${project.id}`,
      query: { project: JSON.stringify(project) },
    });
  };
  

  return (
  <div className={styles.container}>
  <h1>Projects</h1>
  <table className={styles.table}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Created At</th>
        <th>Updated At</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((project) => (
        <tr key={project.id} onClick={() => handleRowClick(project)}>
          <td>{project.id}</td>
          <td>{project.name}</td>
          <td>{project.createdAt}</td>
          <td>{project.updatedAt}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchProjects();

  return {
    props: { projects },
  };
};

export default Home;
