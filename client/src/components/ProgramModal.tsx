type Program = {
  title: string;
  image: string;
  description: string;
  features: string[];
};

type Props = {
  program: Program | null;
  onClose: () => void;
};

export default function ProgramModal({ program, onClose }: Props) {
  if (!program) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <img src={program.image} alt={program.title} />
        <h2>{program.title}</h2>
        <p>{program.description}</p>

        <h4>What’s Included</h4>
        <ul>
          {program.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <button className="modal-btn">Book Free Consultation</button>
      </div>
    </div>
  );
}
