const Card = ({ char }) => {
  return (
    <div className="grid md:grid-cols-1 rounded-xl overflow-hidden  bg-base-100 shadow-xl">
      <figure>
        <img
          src={char.image}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {char.name}
          <div
            className={
              char.status === "Alive"
                ? ` badge badge-success`
                : char.status === "Dead"
                ? ` badge badge-error `
                : ` badge badge-warning `
            }
          >
            {char.status}
          </div>
        </h2>
        <span>{char.species}</span>

        <div className="card-actions justify-start">
          <b>Last known location:</b>
          <span className="text-neutral-content">{char.location.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
