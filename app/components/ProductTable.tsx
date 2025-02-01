const tableHeaders = [
  'image',
  'name',
  'price',
  'company',
  'marketplace status',
  'action',
];

export const ProductTable = ({}) => {
  return (
    <table className="my-[30px] w-full font-inherit ">
      <thead>
        <tr className="h-[60px] bg-dark-grey text-white">
          {tableHeaders.map((header, i) => (
            <th
              key={i}
              className="border border-grey pl-[30px] text-left text-input-title font-normal font-inherit capitalize"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
