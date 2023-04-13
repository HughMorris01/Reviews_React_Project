import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function Person({
  id,
  name,
  job,
  image,
  text,
  prevPerson,
  nextPerson,
  randomPerson,
}) {
  return (
    <article key={id} className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button type="button" className="next-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="btn btn-hipster" onClick={randomPerson}>
        surprise me!
      </button>
    </article>
  );
}
export default Person;
