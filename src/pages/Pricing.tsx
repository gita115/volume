import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const packages = [
  { name: "שיר בר מצווה", price: "₪1200" },
  { name: "ג'ינגל עסקי", price: "₪1500" },
  { name: "קריינות", price: "₪800" },
  { name: "מחרוזת", price: "₪2000" },
];

export default function Pricing() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        חבילות מחירים
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>חבילה</TableCell>
            <TableCell>מחיר</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packages.map((pkg, idx) => (
            <TableRow key={idx}>
              <TableCell>{pkg.name}</TableCell>
              <TableCell>{pkg.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}