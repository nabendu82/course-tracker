import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  
  const loadCourses = async () => {
    const url = 'https://worker.eli4ka-bagirova.workers.dev';

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': `application/json`,
      }
    })

    return resp.json();
  }

  useEffect(() => {
    loadCourses().then(res => setCourses(res));
  }, []);
  
  return (
    <div className="container mt-5">
          <h1 className="mb-5 text-center">Course Tracker</h1>
          <CourseForm courseAdded={loadCourses} />
          <CourseList courses={courses} refreshCourses={loadCourses} />
    </div>
  );
}

export default App;
