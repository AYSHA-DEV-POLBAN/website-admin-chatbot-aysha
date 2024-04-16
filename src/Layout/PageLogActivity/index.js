import React, { useState, useEffect, useContext } from 'react';
// import DataTable from '../../Component/DataTable';
import DataTable from '../../components/DataTable';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button, Box } from '@mui/material';
// import SideBar from '../../Component/Sidebar';
// import Rating from '@mui/material/Rating';
// import { useNavigate } from "react-router";
// import client from "../../global/client";
// import { AlertContext } from "../../context";
import Sidebar from '../../components/Sidebar/Sidebar';
import TableComponent from '../../components/Table/Table';

const Log = () => {
  const columns = [
    {
      field: 'no',
      headerName: 'No',
      flex: 0.3,
      sortable: false,
    },
    {
      field: 'kategori',
      headerName: 'Kategori',
      flex: 0.7,
      minWidth: 200,
    },
    {
      field: 'judul',
      headerName: 'Judul',
      flex: 0.7,
      minWidth: 200,
    },
  ];

  const data = [
    {
      id: 1,
      no: "1",
      kategori: "Electronic",
      judul: "T-WR-0011"
    }
  ]
  
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
//   const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const [idHapus,setidHapus] = useState();
  const [totalData, setTotalData] = useState();
//   const { setDataAlert } = useContext(AlertContext)
  const [filter, setFilter] = useState({
    page: 0,
    size: 10,
    sortName: 'taskName',
    sortType: 'asc',
    search: ''
  })
  

  const handleClickOpen = async (id) => {
    //setId
    setidHapus(id)
    setOpen(true)
  };

  useEffect(() => {
    // getData()
  }, [filter])

//   const getData = async () => {
//     const res = await client.requestAPI({
//       method: 'GET',
//       endpoint: `/backlog?page=${filter.page}&size=${filter.size}&sort=${filter.sortName},${filter.sortType}&search=${filter.search}`
//     })
//     rebuildData(res)
//   }

//   const rebuildData = (resData) => {
//     let temp = []
//     let number = filter.page * filter.size
//     temp = resData.data.map((value, index) => {
//       return {
//         no: number + (index + 1),
//         id: value.id,
//         projectName: value.attributes.projectName,
//         taskCode: value.attributes.taskCode,
//         taskName: value.attributes.taskName,
//         priority: value.attributes.priority,
//         status: value.attributes.status,
//         assignedTo: value.attributes.assignedTo
//       }
//     })    
//     setData([...temp])
//     setTotalData(resData.meta.page.totalElements)
//   }
  
  const deleteData = async (id) => {
    // const res = await client.requestAPI({
    //   method: 'DELETE',
    //   endpoint: `/backlog/${id}`
    // })
    // setOpenAlert(true);
    // getData()
    // if (!res.isError) {
    //   setDataAlert({
    //     severity: 'warning',
    //     open: true,
    //     message: res.meta.message
    //   })
    //   handleClose();
    // } else {
    //   setDataAlert({
    //     severity: 'error',
    //     message: res.error.detail,
    //     open: true
    //   })
    // }
    handleClose();
  }
  

  const handleDetail = async (id) => {
    // localStorage.setItem('idBacklog', id)
    // navigate("/masterbacklog/detail");
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChangeSearch = (event) => {
    setFilter({
      ...filter,
      page: event.target.value != "" ? 0 : filter.page,
      search: event.target.value
    });
  }
  
  
  const onAdd = () => {
    // navigate("/masterbacklog/create");
  }

  const onFilter = (dataFilter) => {
    // setFilter({
    //   page: dataFilter.page,
    //   size: dataFilter.pageSize,
    //   sortName: dataFilter.sorting.field !== '' ? dataFilter.sorting[0].field : 'taskName',
    //   sortType: dataFilter.sorting.sort !== '' ? dataFilter.sorting[0].sort : 'asc',
    //   search: filter.search
    // })
  }

  return (
    <div>
        {/* <TableComponent /> */}
      {/* <Sidebar> */}
        <DataTable
          title='Log Activity'
          data={data}
          columns={columns}
          placeSearch="Project Name, task code, etc"
          searchTitle="Search By"
          onAdd={() => onAdd()}
          onFilter={(dataFilter => onFilter(dataFilter))}
          handleChangeSearch={handleChangeSearch}
          onDetail={(id) => handleDetail(id)}
          onDelete={(id) => handleClickOpen(id)}
          totalData={totalData}
          getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 200}
        />
       
      {/* </Sidebar> */}
    </div>
  )
}

export default Log