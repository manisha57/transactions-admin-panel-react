import { Table } from "antd";

interface TransactionTableProps {
    columns: any;
    data: any;
    onChange: any;
    seachText?: any;
}
const TrasactionTable: React.FC<TransactionTableProps> = ({columns, data, onChange}) => {
    return (
        <>
        <Table columns={columns} dataSource={data} onChange={onChange}/>
        </>
    );
}

export default TrasactionTable;