import React, { useEffect, useState } from 'react';
import './editAuthor.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UpdateButton from '../../components/buttons/update';
import BackButton from '../../components/buttons/back';
import { toast } from 'react-toastify';

function EditAuthor() {
  const { id } = useParams();
  const [author, setAuthor] = useState({
    name: '',
    biography: '',
    img: ''
  });

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const authorResponse = await axios.get(`http://localhost:3000/authors/${id}`);
        setAuthor(authorResponse.data);
      } catch (error) {
      }
    };

    fetchAuthor();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', author.name);
    formData.append('biography', author.biography);
    formData.append('img', e.target.elements.img.files[0]);

    try {
      await axios.put(`http://localhost:3000/authors/edit/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Author successfully edited!');
      setTimeout(() => {
        window.location.href = `/authors/${id}`;
      }, 2500);
    } catch (error) {
      toast.error('Error when trying to edit the author.');
    }
  };


  return (
    <div className="container-edit">
      <form onSubmit={handleSubmit} noValidate className="validated-form" encType="multipart/form-data">

        <div className="row">
          <h1 className="text-title">Edit Author</h1>
          <center><img className="imgAuthor-edit" src={author.img} alt="" /></center>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" name="name" value={author.name} onChange={handleInputChange} required />
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="biography">Biography</label>
              <textarea className="form-control" id="biography" name="biography" value={author.biography} onChange={handleInputChange} required></textarea>
              <div className="valid-feedback">
                Looks good
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="img">Change main image</label>
              <input className="form-control" type="file" name="img" multiple />
            </div>
          </div>
        </div>
        <BackButton />
        <UpdateButton />
      </form>
    </div>


  );
}

export default EditAuthor;
