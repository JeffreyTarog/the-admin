// import {
//   Users
// } from "lucide-react";
import SearchBar from "../../../components/hris/core-hr/dashboard/SearchBar";

function EmployeeManagementView() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add your search logic here
  };

  return (
    <>
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full h-full pb-3 space-y-3">
          <div className="flex flex-row w-full h-[15%] space-x-5">
            <div className="flex flex-grow md:flex-grow-0 flex-col w-[33%] bg-green-600 rounded-lg p-5" id="card_1">
              <div className="flex flex-col md:flex-row h-[50%]">
                {/* <Users size={20} /> */}
                <span className="text-lg">Total Employees</span>
              </div>
              <div className="flex flex-1 justify-start items-center">
                <span className="text-3xl">20</span>
              </div>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col w-[33%] bg-blue-600 rounded-lg p-5" id="card_2">
              <div className="flex flex-col md:flex-row h-[50%]">
                {/* <Users size={20} /> */}
                <span className="text-lg">Total Employees</span>
              </div>
              <div className="flex flex-1 justify-start items-center">
                <span className="text-3xl">20</span>
              </div>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col w-[33%] bg-violet-600 rounded-lg p-5" id="card_3">
              <div className="flex flex-col md:flex-row  h-[50%]">
                {/* <Users size={20} /> */}
                <span className="text-lg">Total Employees</span>
              </div>
              <div className="flex flex-1 justify-start items-center">
                <span className="text-3xl">20</span>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="card flex-col w-full bg-slate-600 rounded-lg p-5">
              <div className="flex w-full items-center justify-between">
                Departments
                <SearchBar onSearch={handleSearch} />
              </div>
              <div className="flex w-full table-auto">
                <table className="w-full mt-5">
                  <thead className="">
                    <tr className="justify-start">
                      <th>Department</th>
                      <th>Head of Department</th>
                      <th>Total Employees</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Finance</td>
                      <td>John Doe</td>
                      <td>20</td>
                      <td>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeManagementView;
