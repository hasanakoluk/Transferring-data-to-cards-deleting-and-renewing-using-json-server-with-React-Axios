import Course from "./Course";
function Courses({courses,removeCourses}) {
    
    return ( 
    
    <div className="courseMainDiv">
        <div>
            <h1 className="courseTitle">Kurslarım</h1>
        </div>
        <div className="cardDiv">
            {
                courses.map((course)=>{
                  return(
                    <Course key={course.id}
                     {...course}
                      removeOneCourse={removeCourses}
                      />
                  )  

                })}
        </div>
    </div>
    
    );
}

export default Courses;