import "./Pagination.css";

export const Pagination = (props) => {
  const { currentPage, onChange, pageNumbers } = props;

  return (
    <div className="pagination">
      {pageNumbers.map((pageNum, index) => (
        <span
          key={index}
          className={`pagination-page ${pageNum === currentPage && "pagination-active-page"}`}
          onClick={() => onChange(pageNum)}
        >
          {pageNum}
        </span>
      ))}
    </div>
  );
};
