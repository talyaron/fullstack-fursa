interface ExercisesProp {
    name: string;
    part:string;
  }
  
  function Exercise(prop: ExercisesProp) {
    return (
      <div className="exercise">
        <h3>{prop.name}</h3>
        <p>{prop.part}</p>
      </div>
    );
  }
  
  export default Exercise;
  