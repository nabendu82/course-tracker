import React, { useState } from 'react';
import Tags from './Tags';
import Airtable from 'airtable';

var base = new Airtable({apiKey: 'keyKRE5t18WyBYUCE'}).base('appgJ22XuOFl3wOIR');

export default function CourseForm({ courseAdded }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);

    // const resetForm = () => {
    //     setName('');
    //     setLink('');
    //     setCount(count + 1);
    // };

    // const submitCourse = async (e) => {
    //     e.preventDefault();

    //     try {
    //       base('Form Submission').create([
    //         {
    //           "fields": { tag: 'node'}
    //         },
    //       ], function(err, records) {
    //         if (err) {
    //           console.error(err);
    //           return;
    //         }
    //         records.forEach(function (record) {
    //           console.log(record.getId());
    //         });
    //       });
    //         resetForm();
    //         courseAdded();
    //     } catch (err) {
    //         console.error(err);
    //     }
    //     console.log(name, link);
    // };
    
    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form
                  className=""
                  // onSubmit={submitCourse}
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
            </div>
        </div>
    );
}
