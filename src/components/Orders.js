import React, {useMemo } from "react";
import { useTable } from "react-table";
import "../index.css";
import {useResultContext} from '../context/ContextProvider'

const Orders = () => {
 
  const {ordersData, loading, } = useResultContext()
 



  const tableColumns = [
    {
      Header: "Order Id",
      accessor: "order_id",
    },
    {
      Header: "Product Id",
      accessor: "product_id",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "User Id",
      accessor: "user_id",
    },
    {
      Header: "Date",
      accessor: "order_date",
    },
  ];

  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => ordersData, [ordersData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="h-4/5">
      {/* <h1>Orders</h1> */}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr> 
            ))}
          </thead>
          <tbody id="table"  {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr{...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
