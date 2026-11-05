function Avatar(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} width="100" />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Avatar;