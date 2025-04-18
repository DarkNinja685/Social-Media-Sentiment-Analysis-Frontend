import React from "react";

export const Table = ({ children }) => {
  return (
    <table className="min-w-full text-left text-sm text-gray-700">
      {children}
    </table>
  );
};

export const TableHeader = ({ children }) => {
  return <thead className="bg-gray-100">{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};

export const TableRow = ({ children }) => {
  return <tr className="hover:bg-gray-50">{children}</tr>;
};

export const TableHead = ({ children }) => {
  return (
    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">
      {children}
    </th>
  );
};

export const TableCell = ({ children }) => {
  return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
};
