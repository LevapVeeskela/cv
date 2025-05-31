interface SummaryProps {
  biography?: string;
}

const Summary = ({ biography }: SummaryProps) => {
  if (!biography || biography.length === 0) return null;
  return (
    <section className='section-container'>
      <header className='heading'>Summary</header>
      <div className='field singlecolumn'>
        <p>{biography}</p>
      </div>
    </section>
  );
};

export default Summary;
