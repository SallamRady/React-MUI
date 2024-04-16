import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const dummyData = [
  {
    id: 1,
    first_name: "Ricoriki",
    last_name: "Gabala",
    email: "rgabala0@histats.com",
    gender: "Male",
    ip_address: "20.106.96.22",
  },
  {
    id: 2,
    first_name: "Sheela",
    last_name: "Ameer-Beg",
    email: "sameerbeg1@ucsd.edu",
    gender: "Female",
    ip_address: "242.11.72.182",
  },
  {
    id: 3,
    first_name: "Brnaba",
    last_name: "Fullerton",
    email: "bfullerton2@amazon.co.uk",
    gender: "Male",
    ip_address: "209.126.116.97",
  },
  {
    id: 4,
    first_name: "Dorene",
    last_name: "Jay",
    email: "djay3@theglobeandmail.com",
    gender: "Female",
    ip_address: "236.254.136.85",
  },
  {
    id: 5,
    first_name: "Alexio",
    last_name: "Getcliff",
    email: "agetcliff4@yellowpages.com",
    gender: "Bigender",
    ip_address: "200.55.4.145",
  },
  {
    id: 6,
    first_name: "Melody",
    last_name: "Lasselle",
    email: "mlasselle5@pbs.org",
    gender: "Female",
    ip_address: "60.207.235.12",
  },
  {
    id: 7,
    first_name: "Hazel",
    last_name: "Kropp",
    email: "hkropp6@china.com.cn",
    gender: "Female",
    ip_address: "166.151.148.53",
  },
  {
    id: 8,
    first_name: "Nissie",
    last_name: "McTiernan",
    email: "nmctiernan7@angelfire.com",
    gender: "Female",
    ip_address: "199.88.19.40",
  },
  {
    id: 9,
    first_name: "Oran",
    last_name: "Haugen",
    email: "ohaugen8@bloomberg.com",
    gender: "Male",
    ip_address: "186.254.135.173",
  },
  {
    id: 10,
    first_name: "Jennifer",
    last_name: "Dutton",
    email: "jdutton9@lycos.com",
    gender: "Female",
    ip_address: "118.9.193.163",
  },
];
export default function MUITable() {
  return (
    <Stack spacing={2} mt={5} p={10}>
      <Typography color={"primary"}>DataTable</Typography>

      {/* Basic Table */}
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "300px",
        }} //css style props
      >
        <Table
          aria-label="basic simple table"
          stickyHeader //make headers is fixed
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((ele) => (
              <TableRow key={ele.id}>
                <TableCell>{ele.id}</TableCell>
                <TableCell>{ele.first_name}</TableCell>
                <TableCell>{ele.last_name}</TableCell>
                <TableCell>{ele.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
