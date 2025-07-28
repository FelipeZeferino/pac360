interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getVisiblePages = () => {
    const delta = 2
    const start = Math.max(1, currentPage - delta)
    const end = Math.min(totalPages, currentPage + delta)

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="rounded px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            1
          </button>
          {visiblePages[0] > 2 && <span className="px-3 py-1 text-sm text-gray-500">...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded px-3 py-1 text-sm font-medium transition ${
            page === currentPage ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-3 py-1 text-sm text-gray-500">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="rounded px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            {totalPages}
          </button>
        </>
      )}
    </div>
  )
}
