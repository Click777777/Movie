import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TableComponent = ({ responseData }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="overflow-x-scroll overflow-hidden border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
            <thead className="bg-main">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                >
                  Ranking
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                >
                  image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                >
                  Category
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                >
                  Year
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                >
                  Hour
                </th>
                <th
                  scope="col"
                  colSpan={2}
                  className="px-6 py-3 text-xs font-bold text-white uppercase text-center "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {responseData &&
                responseData.data.map((arrData, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-text whitespace-nowrap text-center">
                      {arrData.rank}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-text whitespace-nowrap">
                      <img
                        src={arrData.images.webp.large_image_url}
                        alt=""
                        className=" w-full object-contain max-w-[100px]"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-text whitespace-nowrap">
                      {arrData.title_english}
                    </td>
                    <td className="px-6 py-4 text-sm text-text whitespace-nowrap">
                      {arrData.genres.map((data) => `${data.name},`)}
                    </td>

                    <td className="px-6 py-4 text-sm text-text whitespace-nowrap">
                      {arrData.year}
                    </td>
                    <td className="px-6 py-4 text-sm text-text whitespace-nowrap">
                      {arrData.duration}
                    </td>

                    <td className="px-6 py-4 text-lg font-medium text-right whitespace-nowrap">
                      <Link
                        className="text-green-500 hover:text-green-700"
                        to="#"
                      >
                        <BsEyeFill />
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link className="text-red-500 hover:text-red-700" to="#">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
