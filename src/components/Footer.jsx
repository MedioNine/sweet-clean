import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Network from "./Network";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { MOBILE_NUMBER } from "../constants/contacts";

function createData(day, hours) {
  return { day, hours };
}

const rows = [
  createData("Понеділок", "9:00 - 18:00"),
  createData("Вівторок", "9:00 - 18:00"),
  createData("Середа", "9:00 - 18:00"),
  createData("Четвер", "9:00 - 18:00"),
  createData("П'ятниця", "9:00 - 18:00"),
  createData("Субота", "Вихідний"),
  createData("Неділя", "Вихідний"),
];

export default function Footer() {
  return (
    <Box component="footer" id="footer" sx={{ background: "white" }}>
      <Container>
        <Grid container spacing={2} p={2} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Container p={2}>
              <Typography variant="h6">Наші контакти</Typography>
              <Container sx={{ mt: 1 }}>
                <a
                  href={`tel:${MOBILE_NUMBER}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <LocalPhoneIcon style={{ width: 20, height: 20 }} />
                  <span>{MOBILE_NUMBER}</span>
                </a>
              </Container>
            </Container>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Container p={2}>
              <Typography variant="h6">Графік роботи</Typography>
              <Grid container justifyContent="center">
                <Table
                  sx={{ maxWidth: "250px", mt: 1 }}
                  aria-label="simple table"
                  size="small"
                >
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.day} sx={{ "td, th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row.day}
                        </TableCell>
                        <TableCell align="right">{row.hours}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Container>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Container p={2}>
              <Typography variant="h6">Соцмережі</Typography>
              <Container>
                <Network />
              </Container>
            </Container>
          </Grid>
        </Grid>
        <Grid ize={12}>
          <Typography variant="caption">
            Copyright © 2025 Sweet Clean. All Rights Reserved.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
