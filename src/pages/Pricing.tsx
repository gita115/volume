import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const packages = [
  { name: "Bar Mitzvah Song", price: "₪1200" },
  { name: "Business Jingle", price: "₪1500" },
  { name: "Narration", price: "₪800" },
  { name: "Mashup Package", price: "₪2000" },
];

export default function Pricing() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        Pricing Packages
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Package</TableCell>
            <TableCell>Price</TableCell>
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