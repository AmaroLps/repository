import { Box, Card, CardContent, Typography, TextField, Button, Chip, Avatar, Stack, FormControl, InputLabel, Select, MenuItem, Tooltip } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState, useMemo } from "react";
import CustomDataGrid from "@/src/components/base/CustomDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import PeopleIcon from "@mui/icons-material/People";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

type UserStatus = "pending" | "registered" | "inactive";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  dni: string;
  status: UserStatus;
  preRegistrationDate: string;
  registrationDate: string | null;
  policiesCount: number;
  propertiesCount: number;
  incidentsCount: number;
  lastActivity: string;
}

// Mock data actualizado según nueva arquitectura
const mockUsers: User[] = [
  {
    id: "1",
    name: "Juan Pérez García",
    email: "juan.perez@email.com",
    phone: "+51987654321",
    dni: "12345678",
    status: "registered",
    preRegistrationDate: "2024-01-10",
    registrationDate: "2024-01-15",
    policiesCount: 2,
    propertiesCount: 3,
    incidentsCount: 5,
    lastActivity: "2024-02-05"
  },
  {
    id: "2",
    name: "María González López",
    email: "maria.gonzalez@email.com",
    phone: "+51912345678",
    dni: "87654321",
    status: "registered",
    preRegistrationDate: "2024-01-18",
    registrationDate: "2024-01-20",
    policiesCount: 1,
    propertiesCount: 1,
    incidentsCount: 2,
    lastActivity: "2024-02-06"
  },
  {
    id: "3",
    name: "Carlos Rodríguez Soto",
    email: "carlos.rodriguez@email.com",
    phone: "+51998765432",
    dni: "45678912",
    status: "pending",
    preRegistrationDate: "2024-02-01",
    registrationDate: null,
    policiesCount: 0,
    propertiesCount: 0,
    incidentsCount: 0,
    lastActivity: "2024-02-01"
  },
  {
    id: "4",
    name: "Ana Martínez Vega",
    email: "ana.martinez@email.com",
    phone: "+51923456789",
    dni: "78912345",
    status: "registered",
    preRegistrationDate: "2023-12-05",
    registrationDate: "2023-12-10",
    policiesCount: 3,
    propertiesCount: 2,
    incidentsCount: 8,
    lastActivity: "2024-02-04"
  },
  {
    id: "5",
    name: "Luis Hernández Castro",
    email: "luis.hernandez@email.com",
    phone: "+51956789123",
    dni: "32165498",
    status: "pending",
    preRegistrationDate: "2024-02-03",
    registrationDate: null,
    policiesCount: 0,
    propertiesCount: 0,
    incidentsCount: 0,
    lastActivity: "2024-02-03"
  },
  {
    id: "6",
    name: "Carmen Silva Ramos",
    email: "carmen.silva@email.com",
    phone: "+51987123456",
    dni: "65498732",
    status: "registered",
    preRegistrationDate: "2024-01-02",
    registrationDate: "2024-01-05",
    policiesCount: 1,
    propertiesCount: 2,
    incidentsCount: 3,
    lastActivity: "2024-02-05"
  },
  {
    id: "7",
    name: "Roberto Díaz Flores",
    email: "roberto.diaz@email.com",
    phone: "+51945678912",
    dni: "98765432",
    status: "inactive",
    preRegistrationDate: "2023-11-15",
    registrationDate: "2023-11-20",
    policiesCount: 2,
    propertiesCount: 1,
    incidentsCount: 1,
    lastActivity: "2023-12-15"
  },
  {
    id: "8",
    name: "Patricia Torres Méndez",
    email: "patricia.torres@email.com",
    phone: "+51912789456",
    dni: "15935746",
    status: "pending",
    preRegistrationDate: "2024-02-04",
    registrationDate: null,
    policiesCount: 0,
    propertiesCount: 0,
    incidentsCount: 0,
    lastActivity: "2024-02-04"
  },
  {
    id: "9",
    name: "Miguel Ángel Vargas",
    email: "miguel.vargas@email.com",
    phone: "+51934567890",
    dni: "11223344",
    status: "pending",
    preRegistrationDate: "2024-02-05",
    registrationDate: null,
    policiesCount: 0,
    propertiesCount: 0,
    incidentsCount: 0,
    lastActivity: "2024-02-05"
  },
  {
    id: "10",
    name: "Isabel Fernández Cruz",
    email: "isabel.fernandez@email.com",
    phone: "+51967890123",
    dni: "55667788",
    status: "registered",
    preRegistrationDate: "2024-01-25",
    registrationDate: "2024-01-28",
    policiesCount: 2,
    propertiesCount: 4,
    incidentsCount: 6,
    lastActivity: "2024-02-06"
  }
];

function UsersManagement() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [statusFilter, setStatusFilter] = useState<UserStatus | "all">("all");
  const [searchField, setSearchField] = useState<string>("all");

  // Filtrado avanzado
  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      // Filtro de búsqueda
      if (search) {
        const searchLower = search.toLowerCase();
        const matchField = () => {
          switch (searchField) {
            case "name":
              return user.name.toLowerCase().includes(searchLower);
            case "email":
              return user.email.toLowerCase().includes(searchLower);
            case "dni":
              return user.dni.includes(searchLower);
            case "phone":
              return user.phone.includes(searchLower);
            default:
              return (
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.dni.includes(searchLower) ||
                user.phone.includes(searchLower)
              );
          }
        };
        if (!matchField()) return false;
      }

      // Filtro de estado
      if (statusFilter !== "all" && user.status !== statusFilter) {
        return false;
      }

      // Filtro de fechas (usa preRegistrationDate)
      if (startDate && dayjs(user.preRegistrationDate).isBefore(startDate, "day")) {
        return false;
      }
      if (endDate && dayjs(user.preRegistrationDate).isAfter(endDate, "day")) {
        return false;
      }

      return true;
    });
  }, [search, startDate, endDate, statusFilter, searchField]);

  // Métricas calculadas
  const metrics = useMemo(() => {
    const total = filteredUsers.length;
    const pending = filteredUsers.filter((u) => u.status === "pending").length;
    const registered = filteredUsers.filter((u) => u.status === "registered").length;
    const totalPolicies = filteredUsers.reduce((sum, u) => sum + u.policiesCount, 0);
    const totalProperties = filteredUsers.reduce((sum, u) => sum + u.propertiesCount, 0);
    const totalIncidents = filteredUsers.reduce((sum, u) => sum + u.incidentsCount, 0);

    return { total, pending, registered, totalPolicies, totalProperties, totalIncidents };
  }, [filteredUsers]);

  // Limpiar filtros
  function handleClearFilters() {
    setSearch("");
    setStartDate(null);
    setEndDate(null);
    setStatusFilter("all");
    setSearchField("all");
  }

  function handleEdit(row: User) {
    console.log("Completar registro del usuario:", row);
    // Aquí se abrirá el modal para completar registro: pólizas y propiedades
  }

  function handleView(row: User) {
    console.log("Ver detalles completos:", row);
    // Modal de solo lectura con toda la info
  }

  function handleDelete(row: User) {
    console.log("Eliminar usuario:", row);
    // Confirmación y delete
  }

  // Columnas de la grid
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nombre Completo",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
            {params.value.charAt(0)}
          </Avatar>
          <Typography variant="body2" fontWeight={500}>
            {params.value}
          </Typography>
        </Box>
      ),
    },
    {
      field: "dni",
      headerName: "DNI",
      width: 120,
    },
    {
      field: "email",
      headerName: "Correo Electrónico",
      flex: 1,
      minWidth: 220,
    },
    {
      field: "phone",
      headerName: "Teléfono",
      width: 140,
    },
    {
      field: "status",
      headerName: "Estado",
      width: 140,
      renderCell: (params) => {
        const statusConfig = {
          registered: { label: "Registrado", color: "success" as const },
          pending: { label: "Pendiente", color: "warning" as const },
          inactive: { label: "Inactivo", color: "error" as const },
        };
        const config = statusConfig[params.value as UserStatus];
        return (
          <Chip
            label={config.label}
            color={config.color}
            size="small"
            variant="outlined"
          />
        );
      },
    },
    {
      field: "policiesCount",
      headerName: "Pólizas",
      width: 100,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Tooltip title="Número de pólizas registradas">
          <Chip
            icon={<DescriptionIcon />}
            label={params.value}
            color={params.value > 0 ? "primary" : "default"}
            size="small"
            variant="filled"
          />
        </Tooltip>
      ),
    },
    {
      field: "propertiesCount",
      headerName: "Propiedades",
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Tooltip title="Número de propiedades (vehículos/inmuebles)">
          <Chip
            icon={<HomeIcon />}
            label={params.value}
            color={params.value > 0 ? "info" : "default"}
            size="small"
            variant="filled"
          />
        </Tooltip>
      ),
    },
    {
      field: "incidentsCount",
      headerName: "Incidencias",
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Tooltip title="Total de incidencias registradas">
          <Chip
            icon={<ReportProblemIcon />}
            label={params.value}
            color={params.value > 0 ? "secondary" : "default"}
            size="small"
            variant="filled"
          />
        </Tooltip>
      ),
    },
    {
      field: "preRegistrationDate",
      headerName: "Pre-registro",
      width: 130,
      valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY"),
    },
    {
      field: "registrationDate",
      headerName: "Fecha Registro",
      width: 140,
      valueFormatter: (value) => value ? dayjs(value).format("DD/MM/YYYY") : "Pendiente",
      renderCell: (params) => (
        <Typography 
          variant="body2" 
          color={params.value ? "text.primary" : "warning.main"}
          fontWeight={params.value ? 400 : 600}
        >
          {params.value ? dayjs(params.value).format("DD/MM/YYYY") : "Pendiente"}
        </Typography>
      ),
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Gestión de Clientes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Completa registros, asigna pólizas y propiedades
          </Typography>
        </Box>

        {/* Métricas Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "180px" }}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <PeopleIcon />
                  <Typography variant="body2" fontWeight={500}>
                    Total Clientes
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {metrics.total}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "180px" }}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <HourglassEmptyIcon />
                  <Typography variant="body2" fontWeight={500}>
                    Pendientes
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {metrics.pending}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  Por completar
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "180px" }}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                color: "white",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <VerifiedUserIcon />
                  <Typography variant="body2" fontWeight={500}>
                    Registrados
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {metrics.registered}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  Completos
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "180px" }}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                color: "white",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <DescriptionIcon />
                  <Typography variant="body2" fontWeight={500}>
                    Total Pólizas
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {metrics.totalPolicies}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "180px" }}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                color: "white",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <HomeIcon />
                  <Typography variant="body2" fontWeight={500}>
                    Total Propiedades
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {metrics.totalProperties}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                  Vehículos/Inmuebles
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "180px" }}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                color: "#333",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <ReportProblemIcon />
                  <Typography variant="body2" fontWeight={500}>
                    Total Incidencias
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {metrics.totalIncidents}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Registradas
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Filtros */}
        <Card sx={{ mb: 3, p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <FilterListIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Filtros Avanzados
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 2,
            }}
          >
            <Box sx={{ flex: "1 1 calc(25% - 16px)", minWidth: "200px" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Buscar por</InputLabel>
                <Select
                  value={searchField}
                  label="Buscar por"
                  onChange={(e) => setSearchField(e.target.value)}
                >
                  <MenuItem value="all">Todos los campos</MenuItem>
                  <MenuItem value="name">Nombre</MenuItem>
                  <MenuItem value="email">Correo</MenuItem>
                  <MenuItem value="dni">DNI</MenuItem>
                  <MenuItem value="phone">Teléfono</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ flex: "1 1 calc(25% - 16px)", minWidth: "200px" }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Buscar cliente..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: "action.active" }} />,
                }}
              />
            </Box>

            <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "160px" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Estado</InputLabel>
                <Select
                  value={statusFilter}
                  label="Estado"
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                >
                  <MenuItem value="all">Todos</MenuItem>
                  <MenuItem value="registered">Registrados</MenuItem>
                  <MenuItem value="pending">Pendientes</MenuItem>
                  <MenuItem value="inactive">Inactivos</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "160px" }}>
              <DatePicker
                label="Fecha Inicio"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </Box>

            <Box sx={{ flex: "1 1 calc(16.66% - 16px)", minWidth: "160px" }}>
              <DatePicker
                label="Fecha Fin"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={handleClearFilters}
              size="small"
            >
              Limpiar Filtros
            </Button>
          </Box>
        </Card>

        {/* DataGrid */}
        <Card>
          <CustomDataGrid
            columns={columns}
            localRows={filteredUsers}
            serverSide={false}
            search={search}
            onSearch={setSearch}
            onEdit={handleEdit}
            onView={handleView}
            onDelete={handleDelete}
            pageSize={10}
            showToolbar={false}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "action.hover",
                fontWeight: 600,
              },
            }}
          />
        </Card>
      </Box>
    </LocalizationProvider>
  );
}

export default UsersManagement;