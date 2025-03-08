import { SessionLayout } from "../../../layouts/private/SessionLayout";
import { Datatable } from "../../../components/DataTables/DataTable";
import { useNavigate } from "react-router-dom";
import { dataBodyFake, dataHeaderFake } from "../../../helpers/helperDataFake";

// Header
const columns = dataHeaderFake;

// Data
const data = dataBodyFake;


// Edit and Delete
const handleEdit = (id) => alert(`Editando usuario con ID: ${id}`);
const handleDelete = (id) => alert(`Eliminando usuario con ID: ${id}`);


export const TeamPage = () => {

  const navigate = useNavigate();


  const onButtonClick = (e) => {
    e.preventDefault();
    navigate("/admin/team/create");
  }


  return (
    <SessionLayout>

      <div className="flex items-center justify-between">

        <div className="pt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Team</h2>
        </div>

        {/* Header con botón dinámico */}
        <div className="sm:flex sm:items-center">
            <div className="mt-4 sm:mt-0  sm:flex-none">
              <button
                type="button"
                onClick={onButtonClick}
                className="block w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow hover:bg-primary-dark"
              >
              Nuevo 
              </button>
            </div>
        </div>
      </div>


      <Datatable
        columns={columns}
        data={data}
        title="Usuarios"
        editPath="/users"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </SessionLayout>
  );
};
