
import Grade from "./Grade";
import "../styles/student.css";

function Student({ student: {firstName, lastName, age, picture, course, city, gpa, graduate} }) {
  return (
    <div className="student-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <h2>{firstName} {lastName}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>GPA:</strong> <Grade gpa={gpa} /></p>

      {/* Conditional Rendering for Graduation Status */}
      <p className={`status ${graduate ? "graduated" : "enrolled"}`}>
        {graduate ? "🎓 Graduated" : "📚 Actively Enrolled"}
      </p>
    </div>
  );
}

export default Student;
