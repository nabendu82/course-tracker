import React from 'react'

const Course = ({ course, refreshCourses }) => {
    const markCoursePurchased = async () => {
    const courseToUpdate = {
      id: course.id,
      fields: {
        name: course.name,
        tags: course.tags,
        link: course.link,
        purchased: true,
      }
    }
        try {
            await fetch('https://worker.eli4ka-bagirova.workers.dev/purchase', {
                method: 'POST',
                // mode: 'no-cors',
                body: JSON.stringify(courseToUpdate),
                'Content-type': `application/json`,
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async () => {
        try {
            await fetch('/.netlify/functions/courses', {
                method: 'DELETE',
                body: JSON.stringify({ id: course.id }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.tags && course.tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>{tag}</span>
                ))}
            </p>
            {!course.purchased && (
                <button className="btn btn-sm btn-primary" onClick={markCoursePurchased}>Purchased</button>
            )}
            <button className="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>Delete</button>
        </div>
    )
}
export default Course
