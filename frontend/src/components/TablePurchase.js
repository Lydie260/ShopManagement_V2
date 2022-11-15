import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

   
export default function BasicTable(props) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            {props?.tableData?.map((data) =>(
              <TableCell> {data.title}</TableCell>
            ))}
          
          </TableRow>
        </TableHead>
        <TableBody>
        {props?.items?.map((row, index) =>(
          <TableRow
          key={row.name}
          sx={{"&:last-child td, &:last-child th":{ border: 0}}}
          >
            <TableCell component="th" scope="row">
              {index + 1}
             </TableCell>
             {props?.tableData?.map((data, index) =>(  <TableCell align="left">{row[data.name]}</TableCell>
             ))}

 </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
