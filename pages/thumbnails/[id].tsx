import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { addThumbnail } from '../../lib/create-thumbnail';
import { deleteThumbnail } from '../../lib/delete-thumbnail';
import fetchThumbnailsByProjectId from '../../lib/fetch-thumbnails-by-id';
import styles from '../../styles/Thumbnails.module.css';
import { useRouter } from 'next/router';

const Thumbnails = ({ thumbnails, initialId, initialProject }) => {
  const router = useRouter();
  const [thumbnailList, setThumbnailList] = useState(thumbnails);
  const [filename, setFilename] = useState('');
  const [id, setId] = useState(initialId);
  const [project, setProject] = useState(initialProject);

  useEffect(() => {
    if (!id && router.query.id) {
      setId(router.query.id);
    }
    if (!project && router.query.project) {
      setProject(router.query.project);
    }
  }, [router.query.id, router.query.project, id, project]);

  const handleUpload = async () => {
    try {
      const newThumbnail = await addThumbnail(id, filename, project);
      console.log(newThumbnail, "newThumbnail")
      setThumbnailList((prevThumbnails) => [...prevThumbnails, newThumbnail]);
      setFilename('');
    } catch (error) {
      console.error('Error uploading thumbnail:', error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await deleteThumbnail(id);
      setThumbnailList(thumbnailList.filter((thumbnail) => thumbnail.id !== id));
    } catch (error) {
      console.error('Error deleting thumbnail:', error);
    }
  };


  return (
    <div className={styles.container}>
      <h1>Project Thumbnails for {project?.name}</h1>
      <div className={styles.grid}>
        {thumbnailList.map((thumbnail) => (
          <div key={thumbnail.id} className={styles.card}>
          <Image src='https://dummyimage.com/300' alt={thumbnail.filename} width={300} height={200} layout="responsive" />
            <p>{thumbnail.description}</p>
            <button onClick={() => handleDelete(thumbnail.id)}>Delete</button>
          </div>
        ))}
      </div>

      <form className={styles.upload} onSubmit={(e) => { e.preventDefault(); handleUpload(); }}>
        <input
          required
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename"
        />
        <button type="submit">Upload Thumbnail</button>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const thumbnails = await fetchThumbnailsByProjectId(id);
  const initialProject = context.query.project

  return {
    props: { thumbnails, initialId: id, initialProject },
  };
};

export default Thumbnails;
