import { Package, Package2 } from "@/types/package";

const packageData: Package2[] = [
  {
    no: 1,
    namaPelanggan: "Septi Lutfiana",
    namaPerangkat: "SEPTI-0235",
    jumlahAir: 99,
    totTagih: 56000,
    tenggat: "19 - 03 - 2024",
    status: "Lunas"
  }
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[10px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                No
              </th>
              <th className="min-w-[20px] px-4 py-4 pl-0 font-medium text-black dark:text-white xl:pl-11">
                Nama Pelanggan
              </th>
              <th className="min-w-[20px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Nama Perangkat
              </th>
              <th className="min-w-[20px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Jumlah Air
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Total Tagihan
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Tenggat
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-5 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.no}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-0 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.namaPelanggan}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-11 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.namaPerangkat}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-11 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.jumlahAir} kwh
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-3 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Rp {packageItem.totTagih}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.tenggat}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-2 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Lunas"
                        ? "bg-success text-success"
                        : packageItem.status === "Belum"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
