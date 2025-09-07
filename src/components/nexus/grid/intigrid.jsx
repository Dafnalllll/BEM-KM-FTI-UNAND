import React from "react";
import Gubernur from "../../../assets/dinas nexus/press release/inti/gub.png";
import WakilGubernur from "../../../assets/dinas nexus/press release/inti/wagub.png";
import SekretarisDaerah from "../../../assets/dinas nexus/press release/inti/sekda.png";
import BendaharaDaerah from "../../../assets/dinas nexus/press release/inti/benda.png";

const IntiGrid = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-max border border-gray-300 bg-white">
        <tbody>
          <tr>
            <td className="border p-2 text-center align-middle">
              <img
                src={Gubernur}
                alt="Gubernur"
                className="w-32 h-24 object-cover rounded shadow"
              />
            </td>
            <td className="border p-2 text-center align-middle">
              <img
                src={WakilGubernur}
                alt="Wakil Gubernur"
                className="w-32 h-24 object-cover rounded shadow"
              />
            </td>
            <td className="border p-2 text-center align-middle">
              <img
                src={SekretarisDaerah}
                alt="Sekretaris Daerah"
                className="w-32 h-24 object-cover rounded shadow"
              />
            </td>
            <td className="border p-2 text-center align-middle">
              <img
                src={BendaharaDaerah}
                alt="Bendahara Daerah"
                className="w-32 h-24 object-cover rounded shadow"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IntiGrid;
