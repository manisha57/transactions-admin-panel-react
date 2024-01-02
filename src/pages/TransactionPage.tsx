import { ColumnsType, TableProps } from 'antd/es/table';
import AppSelect from '../components/select/AppSelect';
import React, { useEffect } from 'react';
import Search from 'antd/es/input/Search';
import Space from 'antd/es/space';
import AppDateTime from '../components/AppDateTime';
import dayjs from 'dayjs'; // Import dayjs library
import customParseFormat from 'dayjs/plugin/customParseFormat'; // Import customParseFormat plugin
import isBetween from 'dayjs/plugin/isBetween';
import AppTable from '../components/AppTable';
import { TransactionPageWrapper } from './TransactionStyle';


dayjs.extend(customParseFormat);

dayjs.extend(isBetween)


// Sample transaction data
const data = [
  { id: 124255, date: dayjs('2023-12-22'), branch: 'thane', type: 'full', amount: "5,47,890", bank: "CMV HDFC 1223562536", requested_by: "Sharad Verma", status: 'pending' },
  { id: 563233, date: dayjs('2023-12-23'), branch: 'navi mumbai', type: 'full', amount: "2,46,732", bank: "UYT SCB 632786433", requested_by: "Pramod Mehta", status: 'approved' },
  { id: 213352, date: dayjs('2023-12-24'), branch: 'lower parel', type: 'full', amount: "5,53,672", bank: "OIT HDFC 6732647333", requested_by: "Vikas Singh", status: 'rejected' },
  { id: 256243, date: dayjs('2023-12-25'), branch: 'kurla', type: 'full', amount: "1,97,146", bank: "YTF SBI 4823768742", requested_by: "Sharad Shrivastava", status: 'approved' },
  { id: 754833, date: dayjs('2023-12-26'), branch: 'vile parle', type: 'full', amount: "2,42,178", bank: "PHS SBI 839283333", requested_by: "Vikas Mehra", status: 'rejected' },
  { id: 367324, date: dayjs('2023-12-27'), branch: 'mumbai', type: 'full', amount: "6,43,211", bank: "PDS HDFC 843959347", requested_by: "Sharad Kapoor", status: 'rejected' },
  { id: 754833, date: dayjs('2023-12-28'), branch: 'andheri', type: 'full', amount: "8,43,789", bank: "GBG HDFC 523127722", requested_by: "Pramod Mathur", status: 'approved' },
  { id: 367324, date: dayjs('2023-12-29'), branch: 'mumbai', type: 'full', amount: "6,42,843", bank: "MGB SCB 253654373", requested_by: "Vikas Sethi", status: 'approved' }
];

const branch = [
  { label: 'All', value: 'all' },
  { label: 'Thane', value: 'thane' },
  { label: 'Navi Mumbai', value: 'navi mumbai' },
  { label: 'Mumbai', value: 'mumbai' },
  { label: 'Kurla', value: 'kurla' },
  { label: 'Vile Parle', value: 'vile parle' },
  { label: 'Lower Parel', value: 'lower parel' },
  { label: 'Andheri', value: 'andheri' },
  { label: 'Byculla', value: 'byculla' }
];

const type = [
  { label: 'All', value: 'all' },
  { label: 'Full', value: 'full' },
  { label: 'Short', value: 'short' }
];


const status = [
  { label: 'All', value: 'all' },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' },
  { label: 'Pending', value: 'pending' },


]


interface DataType {
  id: number;
  date: dayjs.Dayjs;
  branch: string;
  type: string;
  amount: string;
  bank: string;
  requested_by: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
    defaultSortOrder: 'descend',
    sorter: (a, b) => {
      const dateA = a.date;
      const dateB = b.date;

      if (!dateA.isValid() || !dateB.isValid()) {
        return 0;
      }

      return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
    },
    render: (data: any) => {
      const formattedDate = data.format('YYYY/MM/DD');
      return formattedDate
    }
  },
  {
    title: 'BRANCH',
    dataIndex: 'branch',
  },
  {
    title: 'TYPE',
    dataIndex: 'type',
  },
  {
    title: 'AMOUNT (IN RUPEES))',
    dataIndex: 'amount',
  },
  {
    title: 'BANK',
    dataIndex: 'bank',
  },
  {
    title: 'REQUESTED BY (EMPLOYEE CODE)',
    dataIndex: 'requested_by',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },

];
const TrasactionPage = () => {

  const [filterData, setFilterData] = React.useState(data);
  const [userFilter, setUserFilter] = React.useState<any>({
    searchText: '',
    status: '',
    type: '',
    branch: '',
    fromDate: null,
    toDate: null,
  })

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onBranchFilter = (value: any) => {
    setUserFilter({ ...userFilter, branch: value });
  }

  const onTypeFilter = (value: any) => {
    setUserFilter({ ...userFilter, type: value });
  }

  const onStatusFilter = (value: any) => {
    setUserFilter({ ...userFilter, status: value });

  }

  const onSearch = (value: any) => {
    setUserFilter({ ...userFilter, searchText: value });

  }

  const onDateChange = (dates: any) => {
    setUserFilter({ ...userFilter, fromDate: dates?.[0] ?? null, toDate: dates?.[1] ?? null });
  };

  const filterDataFn = (filters: any) => {
    const { searchText, status, type, branch, fromDate, toDate } = filters;
    let tempData = data;
    if (searchText) {
      tempData = tempData.filter((item: any) => item.id.toString().includes(searchText));
    }
    if (status) {
      tempData = tempData.filter((item: any) => status === 'all' ? item.status != status : item.status === status);
    }
    if (type) {
      tempData = tempData.filter((item: any) => type === 'all' ? item.type != type : item.type === type);
    }
    if (branch) {
      tempData = tempData.filter((item: any) => branch === 'all' ? item.branch != branch : item.branch === branch);
    }
    if (fromDate && toDate) {
      tempData = tempData.filter((item: any) => item.date.isBetween(fromDate, toDate));
    }
    setFilterData(tempData);
  }

  useEffect(() => {
    filterDataFn(userFilter)
  }, [userFilter])


  return (
    <TransactionPageWrapper>
    <div>
    <h3 className='total-heading'>Total ({data.length})</h3>
    </div>
      <Space className='filter-div'>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <AppDateTime 
          onChange={onDateChange}
          value={[userFilter.fromDate, userFilter.toDate]}
        />
      </Space>
      <div className='dropdown-filter'>
        <AppSelect options={branch} onChange={onBranchFilter} label='Branch' />
        <AppSelect options={type} onChange={onTypeFilter} label='Type' />
        <AppSelect options={status} onChange={onStatusFilter} label='Status' />
      </div>
      <AppTable columns={columns} data={filterData} onChange={onChange}/>
    </TransactionPageWrapper>
  );
}

export default TrasactionPage;