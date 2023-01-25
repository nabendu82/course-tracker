import React, { useEffect, useState } from 'react';
import Tags from './Tags';

export default function CourseForm({ courseAdded }) {
    const [formData, setFormData] = useState('');
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
      setFormData(new FormData());
    }, []);

    const resetForm = () => {
        setName('');
        setLink('');
        setCount(count + 1);
    };

    const submitCourse = async (e) => {
        // e.preventDefault();

        // const url = 'https://worker.eli4ka-bagirova.workers.dev/sumbit'

        // try {
        //   await fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify({ name, link, tags }),
        //     headers: {
        //       'Content-type': `application/json`,
        //     },
        //   });
        //     resetForm();
        //     courseAdded();
        // } catch (err) {
        //     console.error(err);
        // }
        console.log(FormData);
        console.log(JSON.stringify({ name, link, tags }));
    };
    
    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form
                  className=""
                  onSubmit={submitCourse}
                  method="POST"
                  action='https://worker.eli4ka-bagirova.workers.dev/submit'
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            className="form-control"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Tags</p>
                        <Tags tagsUpdated={setTags} key={count} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div>{JSON.stringify(...formData)}</div>
            </div>
        </div>
    );
}
