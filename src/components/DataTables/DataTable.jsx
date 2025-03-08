import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Pencil, Trash2, ChevronUp, ChevronDown, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Datatable = ({
  columns,
  data,
  editPath = "",
  onDelete = () => {},
  onEdit = () => {},
}) => {
  const { t } = useTranslation();

  const defaultItemPerPage = 5;

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemPerPage);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  // 🔹 Filtrar datos por búsqueda
  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // 🔹 Ordenar datos
  const sortedData = [...filteredData];
  if (sortColumn) {
    sortedData.sort((a, b) => {
      const valueA = a[sortColumn] || "";
      const valueB = b[sortColumn] || "";

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
      }

      return sortDirection === "asc"
        ? valueA.toString().localeCompare(valueB.toString())
        : valueB.toString().localeCompare(valueA.toString());
    });
  }

  // 🔹 Paginación
  const totalRecords = sortedData.length;
  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(indexOfFirstItem + itemsPerPage, totalRecords);
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // 🔹 Manejar orden de columnas
  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  // 🔹 Generar paginación con "..."
  const generatePaginationRange = () => {
    const range = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);

      if (startPage > 2) range.push("...");
      for (let i = startPage; i <= endPage; i++) range.push(i);
      if (endPage < totalPages - 1) range.push("...");
      range.push(totalPages);
    }
    return range;
  };

  return (
    <div className="w-full border-2 border-gray-100 shadow-xl rounded-xl overflow-hidden p-4">

      {/* 🔍 Barra de búsqueda con lupa */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder={t("search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary-dark sm:text-sm"
          />
        </div>
      </div>

      {/* 📊 Tabla */}
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {sortColumn === column.key && (
                      sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">{t("actions")}</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-4 text-sm whitespace-nowrap text-gray-500">
                      {item[column.key]}
                    </td>
                  ))}
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex gap-2">
                      <Link to={`${editPath}/${item.id}/edit`} className="text-primary hover:text-primary-dark" onClick={() => onEdit(item.id)}>
                        <Pencil className="w-5 h-5" />
                      </Link>
                      <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">{t("no_results_found")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📌 Paginación y selección de registros */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
        <div className="flex items-center">
          <span className="text-sm text-gray-700 mr-2">{t("show")}</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 50, 100].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <span className="text-gray-500 ml-2">{indexOfFirstItem + 1} - {indexOfLastItem} de {totalRecords}</span>
        </div>

        <div className="flex items-center gap-2">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-3 py-2 text-sm rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50">
            {t("back")}
          </button>
          {generatePaginationRange().map((page, index) => (
            <button key={index} onClick={() => typeof page === "number" && setCurrentPage(page)} className={`px-3 py-2 text-sm rounded-md ${currentPage === page ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"}`} disabled={page === "..."}>
              {page}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-3 py-2 text-sm rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50">
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
};



// ✅ Definición de `PropTypes`
Datatable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  editPath: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};
